import LandingPage from "../pages/LandingPage";
import MealPlan from "../pages/MealPlan";
import SelectedMeal from "../pages/SelectedMeal";

export const routes = [
	{
		path: "/land",
		comp: <LandingPage />,
	},
	{
		path: "/MealPlan",
		comp: <MealPlan />,
	},
	{
		path: "/",
		comp: <SelectedMeal />,
	},
];
