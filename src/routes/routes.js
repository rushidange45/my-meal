import FirstPageLogo from "../pages/FirstPageLogo";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";

export const routes = [
	{
		path: "/",
		Comp: FirstPageLogo,
	},
	{
		path:"/login",
		Comp: SecondPage,
	},
	{
		path:"/verify",
		Comp: ThirdPage,
	}
];
