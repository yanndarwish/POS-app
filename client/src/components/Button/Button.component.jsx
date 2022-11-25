import { TouchableOpacity, Text } from "react-native"

const Button = ({ title, onPress }) => {
	const handlePress = () => {
		onPress()
	}
	return (
		<TouchableOpacity onPress={handlePress}>
			<Text>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button
