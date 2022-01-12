import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ButtonComp from "../components/ButtonComp";
import MenuCard from "../components/MenuCard";
import { data, dateData } from "../constant/data";
import ModalPage, { TabPanel } from "./ModalPage";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function MealPlan() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Box>
				<Typography
					align="left"
					sx={{
						fontWeight: 700,
						fontSize: "1.5rem",
						pl: ".35rem",
						mb: 2,
					}}>
					My Meal Plan
				</Typography>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					sx={{
						borderBottom: "1px solid #333",
					}}>
					{dateData.map(({ date }) => {
						return (
							<Tab
								key={date}
								label={date}
								sx={{
									textTransform: "capitalize",
									fontSize: "1rem",
									fontWeight: 800,
								}}
							/>
						);
					})}
				</Tabs>
				{dateData.map(({ date }, i) => {
					return (
						<TabPanel value={value} index={i} sx={{ overflow: "scroll" }}>
							<MenuCard title={`Breakfast-${date}`} data={data} />
							<MenuCard title={`Lunch-${date}`} data={data} />
							<MenuCard title={`Dinner-${date}`} data={data} />
						</TabPanel>
					);
				})}
				<FormGroup>
					<FormControlLabel
						sx={{
							"& .MuiSvgIcon-root": { fontSize: 28 },
							fontWeight: 600,
							mt: 2,
							mb: 2,
						}}
						control={<Checkbox defaultChecked />}
						label="Apply the same meal plan for all other days"
					/>
				</FormGroup>
				<ButtonComp />
			</Box>
			<Button
				onClick={handleOpen}
				variant="contained"
				startIcon={<MenuRoundedIcon />}
				sx={{
					zIndex: 2,
					position: "fixed",
					m: 3,
					mt: 4,
					top: 0,
					right: 0,
					borderRadius: "2.5rem",
					display: "flex",
					alignItems: "center",
					fontSize: "1rem",
				}}>
				Menu
			</Button>
			<ModalPage open={open} handleClose={handleClose} />
		</>
	);
}

export default MealPlan;
