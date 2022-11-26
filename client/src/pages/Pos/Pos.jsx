import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import Button from "../../components/Button/Button.component"
import Input from "../../components/Input/Input.component"
import { shared } from "../../styles/common.styles"

const Pos = () => {
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
					Pos
				</Text>
			</View>
			<View style={[shared.searchSection]}>
				<Input theme={theme} style={{ width: 300 }} />
				<Button color="purple" title="No Barcode" />
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
						Panier
					</Text>
				</View>
				<View style={[shared.bodyContent]}></View>

				<View style={[shared.bodyFooter]}>
					<View style={[shared.bodyFooterLeft]}>
						<Button color="purple" title="Receipt" />
						<Button color="purple" title="Drawer" />
						<Button color="purple" title="Discount" />
					</View>
					<View style={[shared.bodyFooterRight]}>
						<Button color="green" title="Continue to Payment" />
					</View>
				</View>
			</View>
		</View>
	)
}

export default Pos
