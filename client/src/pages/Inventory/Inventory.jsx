import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { shared } from "../../styles/common.styles"
import Input from "../../components/Input/Input.component"
import Button from "../../components/Button/Button.component"

const Inventory = () => {
	const theme = useSelector((state) => state.theme.theme)

	return (
		<View
			style={[
				shared.container,
				theme === "dark" ? shared.darkContainer : shared.lightContainer,
			]}
		>
			<View style={[shared.header]}>
				<Text
					style={[
						shared.pageTitle,
						theme === "dark" ? shared.darkText : shared.lightText,
					]}
				>
					Inventory
				</Text>
			</View>
			<View style={[shared.searchSection, shared.spaceBetween]}>
				<View style={[shared.searchSectionLeft]}>
					<Input theme={theme} style={{ width: 300 }} />
					<Button color="purple" title="Search" />
				</View>
				<View style={[shared.searchSectionRight]}>
					<Input theme={theme} style={{ width: 300 }} />
					<Button color="purple" title="Search" />
				</View>
			</View>
			<View
				style={[
					shared.body,
					theme === "dark" ? shared.darkBody : shared.lightBody,
				]}
			>
				<View style={[shared.bodyHeader]}>
					<Text
						style={[
							shared.bodyTitle,
							theme === "dark" ? shared.darkText : shared.lightText,
						]}
					>
						Products
					</Text>
				</View>
				<View style={[shared.bodyContent]}></View>

				<View style={[shared.bodyFooter]}>
					<View style={[shared.bodyFooterLeft]}></View>
					<View style={[shared.bodyFooterRight]}></View>
				</View>
			</View>
		</View>
	)
}

export default Inventory
