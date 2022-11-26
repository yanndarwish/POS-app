import { View, TouchableOpacity } from "react-native"
import { defaultStyle } from "./Sidebar.component.style"
import { Link, useHref } from "react-router-native"
import { Svg, Path } from "react-native-svg"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../redux/features/theme"
import { useState } from "react"

const Sidebar = () => {
	const uri =  useHref()
	const theme = useSelector((state) => state.theme.theme)
	const loggedIn = useSelector((state) => state.login.loggedIn)
	const dispatch = useDispatch()

	console.log(uri)
	const handleTheme = () => {
		dispatch(toggleTheme())
	}

	return (
		<View
			style={[
				defaultStyle.sidebar,
				theme === "dark" ? defaultStyle.sidebarDark : defaultStyle.sidebarLight,
			]}
		>
			<View style={defaultStyle.sidebarTop}>
				<TouchableOpacity onPress={handleTheme}>
					<Svg
						xmlns="http://www.w3.org/2000/svg"
						height="48"
						width="48"
						style={[
							defaultStyle.icon,
							theme === "dark" ? defaultStyle.iconDark : defaultStyle.iconLight,
						]}
					>
						<Path d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z" />
					</Svg>
				</TouchableOpacity>
				<View
					style={[
						defaultStyle.separator,
						theme === "dark"
							? defaultStyle.separatorDark
							: defaultStyle.separatorLight,
					]}
				></View>
			</View>
			<View style={defaultStyle.linksContainer}>
				{loggedIn ? (
					<>
						<Link to="/pos" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/pos" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
							</Svg>
						</Link>
						<Link to="/dashboard" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/dashboard" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M25.5 22.5h15.45q-.55-6.1-4.925-10.575T25.5 7.05Zm-3 18.45V7.05q-6.55.55-11.025 5.45Q7 17.4 7 24t4.475 11.5q4.475 4.9 11.025 5.45Zm3 0q6.15-.4 10.525-4.875T40.95 25.5H25.5ZM24 24Zm0 20q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Z" />
							</Svg>
						</Link>
						<Link to="/inventory" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/inventory" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M6 40.9V16.3q-.7-.1-1.35-1Q4 14.4 4 13.35V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v6.35q0 1.05-.65 1.95-.65.9-1.35 1v24.6q0 1.15-.925 2.125Q40.15 44 39 44H9q-1.2 0-2.1-.975Q6 42.05 6 40.9Zm3-24.55V41h30V16.35Zm32-3V7H7v6.35Zm-23 13.5h12v-3H18ZM9 41V16.35 41Z" />
							</Svg>
						</Link>
						<Link to="/profile" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/profile" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" />
							</Svg>
						</Link>
						<Link to="/help" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/help" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
							</Svg>
						</Link>
						<Link to="/logout" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
									uri === "/logout" ? defaultStyle.iconAccent : null,
								]}
							>
								<Path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" />
							</Svg>
						</Link>
					</>
				) : (
					<>
						<Link to="/login" style={defaultStyle.link}>
							<Svg
								xmlns="http://www.w3.org/2000/svg"
								height="48"
								width="48"
								style={[
									defaultStyle.icon,
									theme === "dark"
										? defaultStyle.iconDark
										: defaultStyle.iconLight,
								]}
							>
								<Path d="M24.45 42v-3H39V9H24.45V6H39q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm-3.9-9.25L18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" />
							</Svg>
						</Link>
					</>
				)}
			</View>
		</View>
	)
}

export default Sidebar
