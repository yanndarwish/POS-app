import { StyleSheet } from "react-native"
import dark from "./dark.theme.styles"
import light from "./light.theme.styles"

const style = {
	// padding
	PADDING_XS: 6,
	PADDING_S: 12,
	PADDING_M: 24,
	PADDING_L: 48,
	PADDING_XL: 96,
	// margin
	MARGIN_XS: 6,
	MARGIN_S: 12,
	MARGIN_M: 24,
	MARGIN_L: 48,
	MARGIN_XL: 96,
	// gap
	GAP: 24,
	// font-size
	FONT_PAGE_TITLE: 52,
	FONT_SECTION_TITLE: 36,
	FONT_ARTICLE_TITLE: 24,
	FONT_SUBTITLE: 24,
	FONT_LABEL: 16,
	FONT_BODY: 20,
	// border-radius
	BORDER_RADIUS_S: 4,
	BORDER_RADIUS_M: 6,
	//base colors
	CLR_ACCENT: "#7F5AF0",
	CLR_SUCCESS: "#2CB67D",
	CLR_WARNING: "#FAAE2B",
	CLR_DANGER: "#EF4565",
}

export const shared = StyleSheet.create({
	container: {
		flex: 1,
		padding: style.PADDING_L,
		backgroundColor: "blue",
	},
	lightContainer: {
		backgroundColor: light.COLOR_BG_PRIMARY,
		color: light.COLOR_TEXT,
	},
	darkContainer: {
		backgroundColor: dark.COLOR_BG_PRIMARY,
		color: dark.COLOR_TEXT,
	},
	header: {},
	pageTitle: {
		fontSize: style.FONT_PAGE_TITLE,
		fontWeight: "bold",
		marginBottom: style.GAP * 2,
	},
	lightText: {
		color: light.COLOR_TEXT,
	},
	darkText: {
		color: dark.COLOR_TEXT,
	},
	searchSection: {
		flexDirection: "row",
	},
	body: {
		padding: style.PADDING_M,
	},
	lightBody: {
		backgroundColor: light.COLOR_BG_SECONDARY,
	},
	darkBody: {
		backgroundColor: dark.COLOR_BG_SECONDARY,
	},
	bodyHeader: {
		marginBottom: style.GAP,
	},
	bodyTitle: {
		fontSize: style.FONT_SECTION_TITLE,
		fontWeight: "bold",
	},
	bodyFooter: {
		flexDirection: "row",
	},
	bodyFooterLeft: {
		flexDirection: "row",
	},
})

export default style
