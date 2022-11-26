import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { useGetProfileQuery } from "../../redux/services/api"

const Profile = () => {
	const { data, isLoading, error } = useGetProfileQuery()

	const token = useSelector((state) => state.login.token)
	const user = useSelector((state) => state.user.user)


	return (
		<View>
			<Text>Profile</Text>
		</View>
	)
}

export default Profile
