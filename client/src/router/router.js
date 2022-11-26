import { NativeRouter, Route, Routes } from "react-router-native"
import { StyleSheet, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import Root from "../components/Root/Root"
import Dashboard from "../pages/Dashboard/Dashboard"
import Help from "../pages/Help/Help"
import Home from "../pages/Home/Home"
import Inventory from "../pages/Inventory/Inventory"
import Login from "../pages/Login/Login"
import Logout from "../pages/Logout/Logout"
import Pos from "../pages/Pos/Pos"
import Profile from "../pages/Profile/Profile"

export default function Router() {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Routes>
					<Route path="/" element={<Root />}>
						<Route path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="pos" element={<Pos />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="inventory" element={<Inventory />} />
						<Route path="profile" element={<Profile />} />
						<Route path="help" element={<Help />} />
						<Route path="logout" element={<Logout />} />
					</Route>
				</Routes>
			</View>
		</NativeRouter>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		height: "100%",
		width: "100%",
		marginTop: 24,
	},
})
