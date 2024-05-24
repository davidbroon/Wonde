import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeesApi } from "@/store/apis/employees";
import { classApi } from "@/store/apis/classes";

export const store = configureStore({
	reducer: {
		[employeesApi.reducerPath]: employeesApi.reducer,
		[classApi.reducerPath]: classApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(employeesApi.middleware)
			.concat(classApi.middleware),
});

setupListeners(store.dispatch);

export {
	useGetClassQuery,
	useGetClassesQuery,
	useGetSubjectsQuery,
} from "@/store/apis/classes";
export {
	useGetEmployeeQuery,
	useGetEmployeesQuery,
} from "@/store/apis/employees";
