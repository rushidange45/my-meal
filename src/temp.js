const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "92%",
	height: "94%",
	borderRadius: "1.25rem",
	bgcolor: "background.paper",
	boxShadow: 20,
	overflowX: "hidden",
};
function ModalPage({ open, handleClose }) {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Paper sx={style}>
				<Typography
					align="left"
					sx={{
						margin: "0 auto",
						mt: 1.5,
						width: "92%",
						fontWeight: 700,
						fontSize: "1.5rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					Upcoming 14 Days Menu
					<CloseIcon
						onClick={handleClose}
						color="#222"
						sx={{
							fontWeight: 600,
							fontSize: 35,
							m: 1,
							mr: 0,
						}}
					/>
				</Typography>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
					sx={{
						ml: 0.75,
						mr: 0.75,
					}}>
					{dateData.map((ele) => {
						return (
							<Tab
								key={ele}
								label={ele}
								sx={{
									textTransform: "capitalize",
									fontSize: "1rem",
									fontWeight: 800,
								}}
							/>
						);
					})}
				</Tabs>
				{dateData.map((ele, i) => {
					return (
						<TabPanel
							key={ele}
							value={value}
							index={i}
							sx={{ overflow: "scroll" }}>
							<List
								sx={{
									width: "100%",
								}}>
								{data.map(({ type, title, disc, price }, it) => {
									return (
										<ListitemComp
											key={`${ele}${it}`}
											type={type}
											title={`${title} - ${i + 1}`}
											disc={disc}
											price={price}
										/>
									);
								})}
								{data.map(({ type, title, disc, price }, x) => {
									return (
										<ListitemComp
											key={x}
											type={type}
											title={title}
											disc={disc}
											price={price}
										/>
									);
								})}
							</List>
						</TabPanel>
					);
				})}
				<Paper
					elevation={0}
					align="left"
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						mt: 1,
						mb: 2,
					}}>
					<Button sx={{ ...btnStyle, color: "#000" }} variant="contained">
						Download PDF
					</Button>
					<Button sx={{ ...btnStyle }} variant="contained">
						Start Subscription
					</Button>
				</Paper>
			</Paper>
		</Modal>
	);
}
const btnStyle = {
	width: "46%",
	textTransform: "capitalize",
	fontSize: "1rem",
	fontWeight: 600,
	borderRadius: "2rem",
};
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
export default ModalPage;
