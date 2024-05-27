import { store } from "@/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "@/navigation/RootStackNavigation";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStackNavigation />
			</NavigationContainer>
		</Provider>
	);
}
