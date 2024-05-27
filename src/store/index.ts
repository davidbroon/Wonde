import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { employeesApi } from "@/store/apis/employees";
import { classApi } from "@/store/apis/classes";

const rootReducer = combineReducers({
	[employeesApi.reducerPath]: employeesApi.reducer,
	[classApi.reducerPath]: classApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
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
