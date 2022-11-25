import { TextInput } from "react-native"
import { styles } from "./Input.component.styles"

const Input = ({ value, onChange, secure=false}) => {
	// add eye icon to make password visible if secure is true
	return <TextInput style={styles.input} value={value} onChangeText={onChange} secureTextEntry={secure}/>
}

export default Input
