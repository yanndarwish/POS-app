import { TouchableOpacity, Text } from "react-native"
import { styles } from "./Button.component.styles"

const Button = ({ title, color, onPress }) => {
	const handlePress = () => {
		onPress()
	}

	console.log(color)
	return (
		<TouchableOpacity
			onPress={handlePress}
			style={[
				styles.button,
				color === "purple"
					? styles.purple
					: color === "yellow"
					? styles.yellow
					: color === "red"
					? styles.red
					: color === "green"
					? styles.green
					: null
			]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button
