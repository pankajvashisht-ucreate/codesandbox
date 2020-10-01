export const Styles = ({ colors }) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "550px",
		borderBottom: `25px solid ${colors.backgroud}`,
		borderLeft: `10px solid ${colors.backgroud}`,
		borderRight: `10px solid ${colors.backgroud}`,
		borderTop: `5px solid ${colors.backgroud}`,
		"& .heading": {
			height: "50px",
			textTransform: "uppercase",
			display: "flex",
			paddingLeft: "20px",
			alignItems: "center",
			background: colors.black,
			color: colors.textColor,
		},
	},
});
