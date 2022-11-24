import { Text, View } from "react-native"
import { Link } from "react-router-native"

const Sidebar = () => {
    return (
			<View>
				<Link to="/pos">
					<Text>Pos</Text>
				</Link>
				<Link to="/dashboard">
					<Text>Dashboard</Text>
				</Link>
				<Link to="/inventory">
					<Text>Inventory</Text>
				</Link>
				<Link to="/profile">
					<Text>Profile</Text>
				</Link>
				<Link to="/help">
					<Text>Help</Text>
				</Link>
				<Link to="/logout">
					<Text>Logout</Text>
				</Link>
			</View>
		)
}

export default Sidebar