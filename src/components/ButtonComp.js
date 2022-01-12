import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React from "react";

const alignStyle = {
	display: "flex",
	justifyContent: "start",
};
const boldStyle = {
	fontSize: "1.025rem",
	fontWeight: 600,
	mr: 1,
};
const nomStyle = {
	fontSize: "1rem",
	mr: 1,
};
function ButtonComp() {
	return (
		<Button
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderRadius: "2rem",
			}}
			variant="contained"
			endIcon={<ArrowForwardIosIcon />}>
			<Box
				sx={{
					width: "100%",
					pl: 2,
					display: "flex",
					flexDirection: "column",
					textTransform: "capitalize",
					justifyContent: "center",
				}}>
				<Box align="left" sx={{ ...alignStyle }}>
					<Typography sx={{ ...boldStyle }}>7 Days</Typography>
					<Typography sx={{ ...nomStyle }}>Subscription</Typography>
				</Box>
				<Box align="left" sx={{ ...alignStyle }}>
					<Typography sx={{ ...boldStyle }}>₹ 2240/-</Typography>
					<Typography sx={{ ...nomStyle }}>Plus tax</Typography>
				</Box>
			</Box>
			<Typography align="end">NEXT</Typography>
		</Button>
	);
}

export default ButtonComp;
