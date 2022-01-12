import FirstPageLogo from "../pages/FirstPageLogo";
import FourthPage from "../pages/FourthPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FifthPage from "../pages/FifthPage";
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
	},
	{
		path:"/enterMobileNumberToProceed",
		Comp: FourthPage,
	},
	{
		path:"/otpPage",
		Comp: FifthPage,
	}

];
