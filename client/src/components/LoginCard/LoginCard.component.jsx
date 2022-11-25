import { useState } from "react"
import { Text, View } from "react-native"
import { styles } from "./LoginCard.component.styles"
import Input from "../Input/Input.component"
import Button from "../Button/Button.component"

const LoginCard = ({theme}) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = () =>{
		const payload = {
			email: email,
			password: password
		}

		console.log(payload)
	}
		return (
		<View style={[styles.container, styles.shadow,theme === 'dark' ? styles.containerDark : styles.containerLight]}>
			<View style={styles.header}>
				<Text style={[styles.title, theme === 'dark' ? styles.colorDark : styles.colorLight]}>Login</Text>
			</View>
			<View style={styles.body}>
				<Input value={email} onChange={setEmail} />
				<Input value={password} onChange={setPassword} secure/>
			</View>
			<View style={styles.footer}>
				<Button title="Login" onPress={handleLogin}></Button>
			</View>
		</View>
	)
}

export default LoginCard
