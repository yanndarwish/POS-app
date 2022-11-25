import { View } from "react-native"
import LogoutDialog from "../../components/LogoutDialog/LogoutDialog"
import { useSelector } from "react-redux"
import { styles } from "./Logout.styles"

const Logout = () => {
	const theme = useSelector((state) => state.theme.theme)
	return (
		<View
			styles={[
				styles.container,
				theme === "dark" ? styles.containerDark : styles.containerLight,
			]}
		>
			<LogoutDialog theme={theme} />
		</View>
	)
}
export default Logout
