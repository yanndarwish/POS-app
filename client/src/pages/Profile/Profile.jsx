import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { useGetProfileQuery } from "../../redux/services/api"

const Profile = () => {
	const token = useSelector(state => state.login.token)

	const {data, isLoading, error} = useGetProfileQuery()
	console.log(error)
	console.log(data)

	return (
		<View>
			<Text>Profile</Text>
		</View>
	)
}

export default Profile