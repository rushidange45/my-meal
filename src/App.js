import "./App.css";
import FirstPageLogo from "./pages/FirstPageLogo";
import SecondPage from "./pages/SecondPage";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import "./assets/Mask Group 139.svg";
import { routes } from "./routes/routes";
import { FirstPage } from "@material-ui/icons";
import ThirdPage from "./pages/ThirdPage";
import { Button } from "@material-ui/core";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import SubscriptionPriceComp from "./components/SubscriptionPriceComp";
import FifteenthPage from "./components/FifteenthPage/FifteenthPage";
function App() {
	const [width, height] = useWindowSize();
	// const navigateToVerify = () => console.log('click');
	return width <= 450 && height <= 850 ? (
		<div className="App">
			{/* <SecondPage /> */}
			{/*<FirstPageLogo /> */} 
			{/* {/* <ThirdPage/> */}
			{/* <FourthPage /> */}
			{/* <FifthPage /> */}
			{/* <FifteenthPage />	 */}
			{/* <SubscriptionPriceComp/> */}
				{/* <Route
					path="/"
					element={
						<FirstPageLogo/>
					}
				/> */}
				{/* <Button onCLick={navigateToVerify}>GO To verigy</Button> */}
			<Router>
			<Switch>
			{
				routes.map(({path,Comp}) => <Route exact={true} path={path} component={Comp} />				)
			}
			</Switch>
		</Router>
		</div>
	) : (
		<h4>change to mobile view</h4>
	);
}

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

export default App;
