import { Text, View } from "react-native"
import { Outlet } from "react-router-native"
import Sidebar from "../Sidebar/Sidebar"

const Root = () => {
    return (
        <View>
            <Sidebar />
            <Outlet />
        </View>
    )
}

export default Root