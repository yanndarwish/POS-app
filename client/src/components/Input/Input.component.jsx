import { TextInput } from "react-native"
import { styles } from "./Input.component.styles"

const Input = ({ value, onChange, secure=false, theme, style}) => {
	// add eye icon to make password visible if secure is true
	return <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput, style && style]} value={value} onChangeText={onChange} secureTextEntry={secure}/>
}

export default Input
