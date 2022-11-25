import { StyleSheet } from "react-native";
import common from "../../styles/common.styles"
import light from "../../styles/light.theme.styles";
import dark from "../../styles/dark.theme.styles";

const theme = dark
export default StyleSheet.create({
	sidebar: {
		position: "fixed",
		top: 0,
		left: 0,
		width: 100,
		borderRightWidth: 2,
		borderRightColor: `rgba(${theme.COLOR_TEXT_RGB}, 0.15)`,
		backgroundColor: theme.COLOR_BG_SECONDARY,
	},
	icon: {
		fill: theme.COLOR_TEXT,
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
		backgroundColor: theme.COLOR_TEXT,
		opacity: 0.15,
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
		paddingVertical: common.PADDING_M,
		paddingHorizontal: common.PADDING_M,
	},
})