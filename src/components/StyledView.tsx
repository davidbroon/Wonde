import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/constants";
import { StatusBar } from "expo-status-bar";

const StyledView = ({ children }: any) => {
	return (
		<SafeAreaProvider style={styles.container}>
			<StatusBar style="light" />
			<View style={styles.topHalf} />
			<View style={styles.bottomHalf} />
			{children}
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
	},
	topHalf: {
		position: "absolute",
		top: 0,
		left: -50,
		right: -50,
		bottom: "45%",
		borderBottomLeftRadius: 500,
		borderBottomRightRadius: 500,
		backgroundColor: Colors.PRIMARY500,
	},
	bottomHalf: {
		position: "absolute",
		top: "55%",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: Colors.NEUTRAL500,
	},
});
export default StyledView;
