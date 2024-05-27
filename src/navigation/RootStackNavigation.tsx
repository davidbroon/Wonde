import {
	EmployeeListScreen,
	StudentListScreen,
	ClassListScreen,
} from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import { Colors } from "@/constants/constants";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
	return (
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
	);
}
