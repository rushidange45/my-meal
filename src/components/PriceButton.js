import { Button, ButtonGroup, Paper, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React, { useState } from "react";

function PriceButton({ price, btrue, replaceText = false }) {
	const [count, setCount] = useState(0);
	return (
		<Paper
			elevation={0}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			{replaceText && (
				<Typography
					sx={{
						display: "flex",
						alignItems: "center",
						fontWeight: 600,
						fontSize: "1rem",
						color: "#ff4040",
					}}>
					{`Replace`}
				</Typography>
			)}
			<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					fontWeight: 600,
					fontSize: "1.25rem",
				}}>
				<CurrencyRupeeIcon sx={{ fontSize: 20, fontWeight: 700 }} />
				{price}
			</Typography>
			{btrue && (
				<ButtonGroup
					variant="contained"
					sx={{
						borderRadius: "2rem",
						width: "90%",
						boxShadow: "none",
					}}>
					<Button
						onClick={() => setCount(count === 0 ? count : count - 1)}
						sx={{
							...stylebutton,
							borderTopLeftRadius: "2rem",
							borderEndStartRadius: "2rem",
							justifyContent: "end",
							pr: 1,
							boxShadow: "none",
						}}>
						-
					</Button>
					<Button sx={{ ...stylebutton, justifyContent: "center" }}>
						{count}
					</Button>
					<Button
						onClick={() => setCount(count === 5 ? count : count + 1)}
						sx={{
							...stylebutton,
							borderTopRightRadius: "2rem",
							borderBottomRightRadius: "2rem",
							justifyContent: "start",
							pl: 1,
							boxShadow: "none",
						}}>
						+
					</Button>
				</ButtonGroup>
			)}
		</Paper>
	);
}

const stylebutton = {
	display: "flex",
	fontSize: "1rem",
	m: 0,
	p: 0,
	mt: 1,
};
export default PriceButton;
