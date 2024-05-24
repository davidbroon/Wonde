export type RootStackParamList = {
	EmployeeList: undefined;
	ClassList: { employeeId: string; title: string; surname: string };
	StudentList: { classId: string; className: string };
};
