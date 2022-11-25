import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/features/login"
import { View, Text } from "react-native"
import { styles } from "./LogoutDialog.component.styles"
import Button from "../Button/Button.component"

const LogoutDialog = ({ theme }) => {
    const loggedIn = useSelector(state => state.login.loggedIn)
	const dispatch = useDispatch()

    console.log(loggedIn)
	const handleCancel = () => {
		console.log("toz")
	}

	const handleLogout = () => {
		dispatch(logout())
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
					Login
				</Text>
			</View>
			<View style={styles.body}>
				<Text>Are you sure you want to logout ?</Text>
			</View>
			<View style={styles.footer}>
				<Button title="Cancel" onPress={handleCancel}></Button>
				<Button title="Logout" onPress={handleLogout}></Button>
			</View>
		</View>
	)
}

export default LogoutDialog
