import { Text, View } from "react-native"
import { shared } from "../../styles/common.styles"
import Input from "../../components/Input/Input.component"
import Button from "../../components/Button/Button.component"
import { useGetProfilesMutation } from "../../redux/services/api"
import { useSelector } from "react-redux"
import { useEffect } from "react"
const Dashboard = () => {
	const user = useSelector((state) => state.user.user)
	const users = useSelector((state) => state.user.users)
    const theme = useSelector((state) => state.theme.theme)
	const [getProfiles, res] = useGetProfilesMutation()
	console.log(users)

	useEffect(() => {
		getProfiles({ user: user })
	}, [user])


	return (
		<View
			style={[
				shared.container,
				theme === "dark" ? shared.darkContainer : shared.lightContainer,
			]}
		>
			<View style={[shared.header, shared.spaceBetween]}>
				<Text
					style={[
						shared.pageTitle,
						theme === "dark" ? shared.darkText : shared.lightText,
					]}
				>
					Dashboard
				</Text>
				<View style={[shared.searchSectionRight]}>
                    {/* replace by datepicker */}
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
						Charts
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

export default Dashboard
