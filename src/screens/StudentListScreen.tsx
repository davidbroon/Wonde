import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCHOOL_ID } from "../constants/constants";
import { useGetClassQuery } from "@/store";
import ListItem from "@/components/ListItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigator";
import StyledView from "@/components/StyledView";

type StudentListScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"StudentList"
>;

const StudentListScreen = ({ route }: StudentListScreenProps) => {
	const classId = route.params.classId;
	const insets = useSafeAreaInsets();
	const { data, error, isLoading } = useGetClassQuery({
		schoolID: SCHOOL_ID,
		classID: classId,
	});
	const onPressHandler = () => {};

	return (
		<StyledView
			style={{
				flex: 1,
				width: "90%",
			}}
		>
			<FlatList
				data={data?.data?.students?.data}
				renderItem={(itemData) => (
					<ListItem
						name={`${itemData.item.forename} ${itemData.item.surname}`}
						onPress={() => onPressHandler()}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</StyledView>
	);
};

export default StudentListScreen;
