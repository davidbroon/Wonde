import { ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCHOOL_ID } from "@/constants/constants";
import { useGetEmployeesQuery } from "@/store";
import ListItem from "@/components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";
import StyledView from "@/components/StyledView";

interface EmployeeListScreenProps {
	navigation: NativeStackNavigationProp<RootStackParamList, "EmployeeList">;
}

const EmployeeListScreen = ({ navigation }: EmployeeListScreenProps) => {
	const { data, error, isLoading } = useGetEmployeesQuery(SCHOOL_ID);

	const onPressHandler = (
		employeeId: string,
		title: string,
		surname: string,
	) => {
		navigation.navigate("ClassList", { employeeId, title, surname });
	};

	if (isLoading) {
		return <ActivityIndicator />;
	}

	return (
		<StyledView
			style={{
				flex: 1,
				width: "90%",
			}}
		>
			<FlatList
				data={data?.data}
				renderItem={(itemData) => (
					<ListItem
						name={`${itemData.item.forename} ${itemData.item.surname}`}
						onPress={() =>
							onPressHandler(
								itemData.item.id,
								itemData.item.title,
								itemData.item.surname,
							)
						}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</StyledView>
	);
};

export default EmployeeListScreen;
