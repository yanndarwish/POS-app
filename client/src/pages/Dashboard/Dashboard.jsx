import { Text, View } from "react-native"
import { useGetProfilesMutation } from "../../redux/services/api"
import { useSelector } from "react-redux"
import { useEffect } from "react"
const Dashboard = () => {
	const user = useSelector((state) => state.user.user)
	const users = useSelector((state) => state.user.users)
	const [getProfiles, res] = useGetProfilesMutation()
    console.log(users)

    useEffect(() => {
        getProfiles({user: user})
    }, [user])


    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    )
}

export default Dashboard