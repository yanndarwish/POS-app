import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"
import { Provider } from "react-redux"
import store from "./src/redux/store/store"
import Root from "./src/components/Root/Root"
import Dashboard from "./src/pages/Dashboard/Dashboard"
import Help from "./src/pages/Help/Help"
import Home from "./src/pages/Home/Home"
import Inventory from "./src/pages/Inventory/Inventory"
import Login from "./src/pages/Login/Login"
import Logout from "./src/pages/Logout/Logout"
import Pos from "./src/pages/Pos/Pos"
import Profile from "./src/pages/Profile/Profile"

export default function App() {
	return (
		<Provider store={store}>
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
		</Provider>
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
