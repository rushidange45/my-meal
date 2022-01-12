import React, { useState } from "react";
import {
	Button,
	Grid,
	IconButton,
	InputBase,
	List,
	Paper,
	Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../constant/data";
import ListitemComp from "../components/ListitemComp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ModalPage from "./ModalPage";
function LandingPage() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Typography
				align="left"
				sx={{ width: "50%" }}
				color={"#aaa"}
				fontSize={"1rem"}>
				{" "}
				Delivering to
			</Typography>
			<Paper
				elevation={0}
				align="left"
				sx={{
					width: "50%",
					backgroundColor: "transparent",
					display: "flex",
					alignItems: "center",
				}}>
				<LocationOnIcon sx={{ color: "#888" }} />
				<Typography
					align="left"
					noWrap
					color={"primary"}
					fontSize={"1.25rem"}
					color="#000">
					2/76, Shivaji Nagar…
				</Typography>
			</Paper>
			<Paper
				component="form"
				sx={{
					mb: "1.5rem",
					mt: ".75rem",
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					width: "100%",
					borderRadius: "30px",
				}}>
				<IconButton sx={{ p: "10px" }} aria-label="menu">
					<SearchIcon sx={{ fontSize: "25px" }} />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search food"
					inputProps={{ "aria-label": "Search food" }}
				/>
			</Paper>
			<Typography
				align="left"
				sx={{
					fontWeight: 500,
					fontSize: "1.25rem",
				}}>
				Your Active Subscription
			</Typography>
			<Paper
				elevation={3}
				sx={{
					p: 2,
					pb: 6,
					mt: "1rem",
					mb: "1.25rem",
					display: "flex",
					alignItems: "center",
					width: "100%",
					height: "180px",
					borderRadius: "1rem",
					backgroundPosition: "center",
					backgroundSize: "cover",
					background: `url(${`https://media.istockphoto.com/photos/restaurant-gourmet-food-on-dark-background-picture-id902558446?k=20&m=902558446&s=170667a&w=0&h=-mr8LaG_pKDXhwA5n-jkYeqMsKwUtNdSFIIggfjicu0=`})`,
				}}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography
							sx={{
								color: "#ddd",
								fontSize: "1rem",
							}}>
							Meal Plan
						</Typography>
						<Typography
							sx={{
								color: "#fff",
								fontSize: "1.5rem",
								fontWeight: "600",
							}}>
							7 Days Subscription
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								color: "#ddd",
								fontSize: ".85rem",
							}}>
							Start Date
						</Typography>
						<Typography
							sx={{
								color: "#fff",
								fontWeight: "600",
							}}>
							20 May, 2021
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								color: "#ddd",
								fontSize: ".85rem",
							}}>
							Days Remaining
						</Typography>
						<Typography
							sx={{
								color: "#fff",
								fontWeight: "600",
							}}>
							7 of 7
						</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Grid
				container
				spacing={2}
				sx={{
					mb: 4,
				}}>
				<Grid item xs={6}>
					<Paper
						elevation={3}
						sx={{
							width: "100%",
							height: "100%",
							p: 2,
							backgroundColor: "#eba834",
							borderRadius: "1rem",
						}}>
						<Typography
							sx={{
								color: "#fff",
								fontSize: "2rem",
								fontWeight: "700",
							}}>
							50% off
						</Typography>
						<Typography
							sx={{
								color: "#fff",
								fontSize: "1.15rem",
								fontWeight: "600",
							}}>
							Trial offer
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper
						elevation={3}
						sx={{
							width: "100%",
							height: "100%",
							p: 2,
							backgroundColor: "green",
							borderRadius: "1rem",
						}}>
						<Typography
							sx={{
								color: "#fff",
								fontSize: "2rem",
								fontWeight: "600",
							}}>
							Special Offer
						</Typography>
						<Typography
							sx={{
								color: "#fff",
								fontSize: "1.15rem",
								fontWeight: "600",
							}}>
							for Veg Lovers
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<Typography
				align="left"
				sx={{
					fontWeight: 700,
					fontSize: "1.7rem",
				}}>
				Top Picks for You
			</Typography>
			<Paper
				elevation={2}
				sx={{
					mt: 2,
					width: "100%",
					minHeight: "0%",
					backgroundColor: "#fff",
					borderRadius: "1rem",
				}}>
				<List
					sx={{
						width: "100%",
						p: 2,
					}}>
					{data.map(({ type, title, disc, price }, x) => {
						return (
							<ListitemComp
								type={type}
								title={title}
								disc={disc}
								price={price}
								div={data.length - 1 === x ? false : true}
							/>
						);
					})}
				</List>
			</Paper>
			<Button
				onClick={handleOpen}
				variant="contained"
				startIcon={<MenuRoundedIcon />}
				sx={{
					zIndex: 2,
					position: "fixed",
					m: 3,
					mb: 4,
					bottom: 0,
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

export default LandingPage;
