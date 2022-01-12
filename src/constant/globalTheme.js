import { red, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
	palette: {
		primary: {
			main: red[400],
		},
		secondary: {
			main: pink[500],
		},
	},
});
