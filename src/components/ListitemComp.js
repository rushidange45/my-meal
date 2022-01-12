import {
	Avatar,
	Divider,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";
import PriceButton from "./PriceButton";

function ListitemComp({
	type,
	title,
	disc,
	price,
	style,
	div = true,
	btrue = false,
	replaceText,
	addMore = false,
	dataEle = false,
	dataEleflag = "",
}) {
	return (
		<>
			{dataEleflag && (
				<Typography
					sx={{
						mt: 1,
						fontSize: "1.1rem",
						fontWeight: 500,
						color: "#555",
					}}>
					{dataEle}
				</Typography>
			)}
			<ListItem
				alignItems="flex-start"
				align="center"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					p: 0,
				}}>
				<ListItemText
					primary={
						<>
							<Typography
								align="left"
								sx={{
									...style,
									mb: 0.75,
									display: "flex",
									alignItems: "center",
									fontSize: "1.25rem",
									fontWeight: 600,
								}}>
								<Avatar
									alt="type"
									src={type === "veg" ? veg : nonveg}
									sx={{
										mr: 1,
										width: "6%",
										height: "6%",
										borderRadius: 0,
										border: `2.5px solid ${type === "veg" ? "green" : "red"}`,
									}}
								/>
								{title}
							</Typography>
						</>
					}
					secondary={
						<Typography sx={{ m: 0, p: 0, mr: 2 }}>
							{disc}
							{addMore && (
								<Typography
									sx={{
										mt: 1,
										color: "#ff4040",
									}}>{`+ Add more`}</Typography>
							)}
						</Typography>
					}
				/>
				<PriceButton
					price={price}
					btrue={btrue}
					style={style}
					replaceText={replaceText}
				/>
			</ListItem>
			{div && (
				<Divider
					component="li"
					sx={{
						listStyleType: "none",
					}}
				/>
			)}
		</>
	);
}

export default ListitemComp;
