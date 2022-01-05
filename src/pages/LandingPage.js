import React from "react";
import { Button, Paper, Typography } from "@mui/material";

function LandingPage() {
	return (
		<>
			<Typography
				align="left"
				sx={{ width: "50%" }}
				noWrap
				color={"#aaa"}
				fontSize={"1rem"}>
				{" "}
				Delivering to
			</Typography>
			<Paper></Paper>
		</>
	);
}

export default LandingPage;
