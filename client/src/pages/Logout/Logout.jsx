import { View } from "react-native"
import LogoutDialog from "../../components/Card/LogoutCard/LogoutCard.component.jsx"
import { useSelector } from "react-redux"
import { styles } from "./Logout.styles"

const Logout = () => {
	const theme = useSelector((state) => state.theme.theme)
	return (
		<View
			style={[
				styles.container,
				theme === "dark" ? styles.containerDark : styles.containerLight,
			]}
		>
			<LogoutDialog theme={theme} />
		</View>
	)
}
export default Logout
