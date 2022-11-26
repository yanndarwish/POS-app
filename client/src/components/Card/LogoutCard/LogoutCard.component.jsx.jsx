import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../redux/features/login"
import { userLogout } from "../../../redux/features/user"
import { View, Text } from "react-native"
import { styles } from "../Card.component.styles"
import Button from "../../Button/Button.component"
import { useNavigate } from "react-router-native"

const LogoutDialog = ({ theme }) => {
    const loggedIn = useSelector(state => state.login.loggedIn)
	const dispatch = useDispatch()
	const navigate = useNavigate()

    console.log(loggedIn)
	const handleCancel = () => {
		console.log("toz")
	}

	const handleLogout = () => {
		dispatch(logout())
		dispatch(userLogout())
		navigate("/login")
	}

	return (
		<View
			style={[
				styles.container,
				styles.shadow,
				theme === "dark" ? styles.containerDark : styles.containerLight,
			]}
		>
			<View style={styles.header}>
				<Text
					style={[
						styles.title,
						theme === "dark" ? styles.colorDark : styles.colorLight,
					]}
				>
					Logout
				</Text>
			</View>
			<View style={styles.body}>
				<Text
					style={[
						styles.text,
						theme === "dark" ? styles.colorDark : styles.colorLight,
					]}
				>
					Are you sure you want to logout ?
				</Text>
			</View>
			<View style={styles.footer}>
				<Button title="Cancel" color="red" onPress={handleCancel}></Button>
				<Button title="Logout" color="green" onPress={handleLogout}></Button>
			</View>
		</View>
	)
}

export default LogoutDialog
