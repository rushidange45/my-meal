import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import "./assets/Mask Group 139.svg";

function App() {
	const [width, height] = useWindowSize();
	return width <= 450 && height <= 850 ? (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<h4>
							Window size: {width} x {height}
						</h4>
					}
				/>
			</Routes>
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
