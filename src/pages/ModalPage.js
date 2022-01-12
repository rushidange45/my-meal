import {
	Typography,
	Box,
	Tabs,
	Tab,
	List,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { dateData, data } from "../constant/data";
import ListitemComp from "../components/ListitemComp";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "94%",
	height: "94%",
	borderRadius: "1.25rem",
	overflowX: "hidden",
};

function ModalPage({ open, handleClose }) {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Dialog open={open} fullScreen="sm" sx={style}>
			<DialogTitle
				sx={{
					width: "100%",
					pb: 0,
					borderBottom: "1px solid #333",
				}}>
				<Typography
					align="left"
					sx={{
						margin: "0 auto",
						width: "94%",
						fontWeight: 700,
						fontSize: "1.5rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					Upcoming 14 Days Menu
					<CloseIcon
						onClick={handleClose}
						color="#222"
						sx={{
							fontWeight: 600,
							fontSize: 30,
							mr: -2,
						}}
					/>
				</Typography>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto">
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
			</DialogTitle>
			<DialogContent
				sx={{
					width: "100%",
					p: 0,
				}}>
				{dateData.map((ele, i) => {
					return (
						<TabPanel
							key={ele}
							value={value}
							index={i}
							sx={{ overflow: "scroll" }}>
							<List
								sx={{
									width: "100%",
									p: 2,
								}}>
								{data.map(({ type, title, disc, price }, it) => {
									return (
										<ListitemComp
											key={`${ele}${it}`}
											type={type}
											title={`${title} - ${i + 1}`}
											disc={disc}
											price={price}
										/>
									);
								})}
								{data.map(({ type, title, disc, price }, x) => {
									return (
										<ListitemComp
											key={x}
											type={type}
											title={title}
											disc={disc}
											price={price}
											div={data.length - 1 === x ? false : true}
										/>
									);
								})}
							</List>
						</TabPanel>
					);
				})}
			</DialogContent>
			<DialogActions
				align="left"
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					pt: 1.5,
					mb: 1,
					borderTop: "1px solid #222",
					borderTopWidth: "90%",
				}}>
				<Button sx={{ ...btnStyle, color: "#000" }} variant="contained">
					Download PDF
				</Button>
				<Button sx={{ ...btnStyle }} variant="contained">
					Start Subscription
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ModalPage;

export const btnStyle = {
	width: "50%",
	textTransform: "capitalize",
	fontSize: "1rem",
	fontWeight: 600,
	borderRadius: "2rem",
};
export const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};
