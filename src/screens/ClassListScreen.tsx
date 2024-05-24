import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCHOOL_ID } from "../constants/constants";
import { useGetEmployeeQuery } from "@/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigator";
import ListItem from "@/components/ListItem";
import StyledView from "@/components/StyledView";

type ClassListScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"ClassList"
>;

const ClassListScreen = ({ navigation, route }: ClassListScreenProps) => {
	const insets = useSafeAreaInsets();
	const employeeID = route.params.employeeId;
	const { data, error, isLoading } = useGetEmployeeQuery({
		schoolID: SCHOOL_ID,
		employeeID: employeeID,
	});

	const onPressHandler = (classId: string, className: string) => {
		navigation.navigate("StudentList", { classId, className });
	};

	return (
		<StyledView
			style={{
				flex: 1,
				width: "90%",
			}}
		>
			<FlatList
				data={data?.data?.classes?.data}
				renderItem={(itemData) => (
					<ListItem
						name={itemData.item.name}
						onPress={() => onPressHandler(itemData.item.id, itemData.item.name)}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</StyledView>
	);
};

export default ClassListScreen;
