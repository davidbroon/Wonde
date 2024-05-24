import StyledView from "@/components/StyledView";
import EmployeeListScreen from "@/screens/EmployeeListScreen";
import { store } from "@/store";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassListScreen from "@/screens/ClassListScreen";
import StudentListScreen from "@/screens/StudentListScreen";
import { RootStackParamList } from "@/types/navigator";
import { Colors } from "@/constants/constants";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: Colors.PRIMARY500,
						},
						headerShadowVisible: false,
						headerTintColor: Colors.NEUTRAL500,
						headerBackTitle: "Back",
					}}
				>
					<Stack.Screen
						name="EmployeeList"
						component={EmployeeListScreen}
						options={{
							title: "Employee List",
						}}
					/>
					<Stack.Screen
						name="ClassList"
						component={ClassListScreen}
						options={({ route }) => ({
							title: `${route.params.title} ${route.params.surname}'s Classes`,
						})}
					/>
					<Stack.Screen
						name="StudentList"
						component={StudentListScreen}
						options={({ route }) => ({
							title: `${route.params.className} - Students`,
						})}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
