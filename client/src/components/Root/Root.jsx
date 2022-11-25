import { Text, View, StyleSheet } from "react-native"
import { Outlet } from "react-router-native"
import Sidebar from "../Sidebar/Sidebar.component"

const Root = () => {
    return (
        <View style={styles.container}>
            <Sidebar />
            <Outlet />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
        flexDirection: "row",
	},
})

export default Root