import { StyleSheet } from "react-native";
import theme from "../../styles/common.styles"

export default StyleSheet.create({
	sidebar: {
		position: "fixed",
		top: 0,
		left: 0,
		width: 100,
		borderRightWidth: 2,
		borderRightColor: "red",
	},
	icon: {
		fill: "black",
	},
	sidebarTop: {
		position: "relative",
		width: "100%",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		maxHeight: 120,
	},
	separator: {
		position: "absolute",
		bottom: 0,
		height: 2,
		width: "60%",
		marginHorizontal: "20%",
		backgroundColor: "red",
	},
	linksContainer: {
		height: "100%",
		width: "100%",
		flex: 7,
		flexDirection: "column",
		justifyContent: "center",
		gap: 20,
	},
	text: {
		color: "white",
		textAlign: "center",
	},
	link: {
		paddingVertical: theme.PADDING_M,
		paddingHorizontal: theme.PADDING_M,
	},
})