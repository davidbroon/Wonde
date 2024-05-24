import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/constants";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
	name: string;
	onPress: () => void;
}

const ListItem = ({ name, onPress }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.listItem,
				pressed ? styles.pressedButton : null,
			]}
			onPress={onPress}
		>
			<LinearGradient
				start={{ x: 0.1, y: 0 }}
				end={{ x: 1, y: 1 }}
				colors={[Colors.PRIMARY600, Colors.NEUTRAL500]}
				locations={[0.7, 1]}
				style={styles.gradient}
			>
				<Text style={styles.itemText}>{name}</Text>
			</LinearGradient>
		</Pressable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.ACCENT500,
		borderWidth: 1,
		borderRadius: 40,
		marginVertical: 8,
		width: "90%",
		marginHorizontal: 10,
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: -5, height: 5 },
		shadowOpacity: 0.35,
		shadowRadius: 5,
	},
	pressedButton: {
		opacity: 0.85,
	},
	gradient: {
		borderRadius: 40,
		padding: 12,
	},
	itemText: {
		fontWeight: "800",
		fontSize: 25,
		marginLeft: 30,
		color: Colors.NEUTRAL500,
	},
});
