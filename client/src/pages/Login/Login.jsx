import { Text, View } from "react-native"
import LoginCard from "../../components/LoginCard/LoginCard.component"
import { useSelector } from "react-redux"
import { styles } from "./Login.styles"

const Login = () => {
    const theme = useSelector(state => state.theme.theme)

    return (
        <View style={[styles.container, theme === "dark" ? styles.containerDark : styles.containerLight]}>
            <Text>Login page</Text>
            <LoginCard theme={theme}/>
        </View>
    )
}

export default Login