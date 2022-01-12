import { Routes, Route } from "react-router-dom";
import { Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "./assets/Mask_Group_139.svg";
import { routes } from "./routes/routes";

function App() {
	const theme = useTheme();
	const winSize = useMediaQuery(theme.breakpoints.down("sm"));
	return winSize ? (
		<Paper
			component="div"
			sx={{
				position: "absolute",
				top: "0",
				left: "0",
				width: "100vw",
				height: "100vh",
				backgroundImage: `url(${Image})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
				overflowX: "hidden",
				p: 2,
				pt: 4,
			}}>
			<Routes>
				{routes.map(({ path, comp }) => {
					return <Route key={path} path={path} element={comp} />;
				})}
			</Routes>
		</Paper>
	) : (
		<div className="App">
			<h4>change to mobile view</h4>
		</div>
	);
}

export default App;
