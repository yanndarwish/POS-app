import { StyleSheet } from "react-native"
import { Provider } from "react-redux"
import store from "./src/redux/store/store"
import Router from "./src/router/router"

export default function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}
