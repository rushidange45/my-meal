import { Paper, Typography } from "@mui/material";
import React from "react";
import ListitemComp from "./ListitemComp";

function MenuCard({
	title,
	data,
	dataDiv = 2,
	btrue = true,
	replaceText = false,
	addMore,
	dataEleflag,
	dataEle,
}) {
	return (
		<Paper
			elevation={2}
			sx={{
				width: "100%",
				mt: 4,
				p: 2,
				borderRadius: "1.5rem",
			}}>
			<Typography
				align="left"
				sx={{
					fontWeight: 700,
					fontSize: "1.5rem",
				}}>
				{title}
			</Typography>
			{data.slice(0, dataDiv).map(({ type, title, disc, price }, x) => {
				return (
					<ListitemComp
						key={x}
						type={type}
						title={title}
						disc={disc}
						price={price}
						style={x % 2 === 0 ? "#fff" : "primary"}
						div={data.slice(0, dataDiv).length - 1 === x ? false : true}
						btrue={btrue}
						replaceText={replaceText}
						addMore={addMore}
						dataEleflag={dataEleflag}
						dataEle={dataEleflag ? dataEle[x] : ""}
					/>
				);
			})}
		</Paper>
	);
}

export default MenuCard;
