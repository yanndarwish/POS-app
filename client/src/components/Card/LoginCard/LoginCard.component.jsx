import { useState } from "react"
import { Text, View } from "react-native"
import { styles } from "../Card.component.styles"
import Input from "../../Input/Input.component"
import Button from "../../Button/Button.component"
import { useGetAuthMutation } from "../../../redux/services/api"
import commonStyles from "../../../styles/common.styles"

const LoginCard = ({ theme }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [getAuth, res] = useGetAuthMutation()

	const handleLogin = async () => {
		const payload = {
			email: email,
			password: password,
		}
		await getAuth(payload)
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
				<Input
					value={email}
					theme={theme}
					onChange={setEmail}
					style={{ marginBottom: commonStyles.GAP / 2, width: 300 }}
				/>
				<Input
					value={password}
					theme={theme}
					onChange={setPassword}
					secure
					style={{ marginVertical: commonStyles.GAP / 2, width: 300 }}
				/>
			</View>
			<View>
				<Button title="Login" color="green" onPress={handleLogin}></Button>
			</View>
		</View>
	)
}

export default LoginCard
