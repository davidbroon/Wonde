import { API_ACCESS_TOKEN, API_URL, ApiRoutes } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeesApi = createApi({
	reducerPath: "employeesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders(headers) {
			headers.set("Authorization", `Bearer ${API_ACCESS_TOKEN}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getEmployees: builder.query({
			query: (schoolID: string) =>
				`${ApiRoutes.EMPLOYEES.replace("{school_id}", schoolID)}`,
		}),
		getEmployee: builder.query({
			query: ({
				schoolID,
				employeeID,
			}: {
				schoolID: string;
				employeeID: string;
			}) =>
				`${ApiRoutes.EMPLOYEE.replace("{school_id}", schoolID).replace(
					"{employee_id}",
					employeeID,
				)}`,
		}),
	}),
});
export { employeesApi };
export const { useGetEmployeeQuery, useGetEmployeesQuery } = employeesApi;
