import { Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ButtonComp from "../components/ButtonComp";
import ListitemComp from "../components/ListitemComp";
import MenuCard from "../components/MenuCard";
import { data, dateData } from "../constant/data";
import ModalPage, { TabPanel } from "./ModalPage";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function SelectedMeal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const [valueAdd, setValueAdd] = useState(0);
	const handleChangeAdd = (event, newValue) => {
		setValueAdd(newValue);
	};

	return (
		<>
			<Typography
				align="left"
				sx={{
					fontWeight: 700,
					fontSize: "1.5rem",
					width: "80%",
					ml: ".35rem",
					mb: 1,
				}}>
				We’ve selected 5 meals based on your preferences
			</Typography>
			<Typography
				align="left"
				sx={{
					fontSize: "1.075rem",
					width: "95%",
					ml: ".35rem",
					mb: 1,
				}}>
				Don’t worry, you can always choose from the full menu.
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
			{dateData.map((_, i) => {
				return (
					<TabPanel value={value} index={i} sx={{ overflow: "scroll" }}>
						<MenuCard
							title={`Person-${i}`}
							data={data}
							dataDiv={3}
							btrue={false}
							replaceText={true}
							addMore={true}
							dataEleflag={true}
							dataEle={dataEle}
						/>
					</TabPanel>
				);
			})}
			<Typography
				align="left"
				sx={{
					fontWeight: 700,
					fontSize: "1.5rem",
					width: "80%",
					ml: ".35rem",
					mb: 1,
					mt: 3,
				}}>
				Add On’s
			</Typography>
			<Tabs
				value={valueAdd}
				onChange={handleChangeAdd}
				variant="scrollable"
				scrollButtons="auto"
				sx={{
					zIndex: 2,
					"& .css-10tk97a-MuiButtonBase-root-MuiTab-root": {
						p: 0,
						m: 0,
					},
					"& .css-1jejqrs-MuiTabs-indicator": {
						height: "0 !important",
					},
					width: "100%",
					p: 1,
					m: 1,
				}}>
				{data.map(
					({ type, title, disc, price, btrue, replaceText, addMore }, x) => {
						return (
							<Tab
								key={x}
								label={
									<Paper
										elevation={2}
										sx={{
											width: "100%",
											height: "100%",
											p: 2,
											borderRadius: "1.5rem",
										}}>
										<ListitemComp
											type={type}
											title={title}
											disc={disc}
											price={price}
											style={x % 2 === 0 ? "#fff" : "primary"}
											div={false}
											btrue={btrue}
											replaceText={replaceText}
											addMore={addMore}
											dataEleflag={false}
											dataEle={""}
										/>
									</Paper>
								}
								sx={{
									p: 0,
									m: 0,
									width: "100%",
									textTransform: "capitalize",
									fontSize: "1rem",
									fontWeight: 800,
									mr: 1,
								}}></Tab>
						);
					}
				)}
			</Tabs>
			<Typography
				align="center"
				color="primary"
				sx={{
					fontSize: "1.25rem",
					mt: 4,
					mb: 3,
				}}>
				View All Add-on
			</Typography>
			<ButtonComp />
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

const dataEle = ["Breakfast", "Lunch", "Dinner", "Note"];
export default SelectedMeal;
