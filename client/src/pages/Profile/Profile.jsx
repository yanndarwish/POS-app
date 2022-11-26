import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { useGetProfileQuery } from "../../redux/services/api"
import {shared} from "../../styles/common.styles"


const Profile = () => {
	const { data, isLoading, error } = useGetProfileQuery()
	const theme = useSelector(state => state.theme.theme)
	const token = useSelector((state) => state.login.token)
	const user = useSelector((state) => state.user.user)


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
					{user && user.firstName} {user && user.lastName}
				</Text>
			</View>
			<View style={[shared.searchSection]}>
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
						Performances
					</Text>
				</View>
				<View style={[shared.bodyContent]}></View>

				<View style={[shared.bodyFooter]}>
					<View style={[shared.bodyFooterLeft]}>
					</View>
					<View style={[shared.bodyFooterRight]}>

					</View>
				</View>
			</View>
		</View>
	)
}

export default Profile
