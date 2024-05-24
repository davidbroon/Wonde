import { API_ACCESS_TOKEN, API_URL, ApiRoutes } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const classApi = createApi({
	reducerPath: "classesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders(headers) {
			headers.set("Authorization", `Bearer ${API_ACCESS_TOKEN}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getClasses: builder.query({
			query: (schoolID: string) =>
				`${ApiRoutes.CLASSES.replace("{school_id}", schoolID)}`,
		}),
		getClass: builder.query({
			query: ({ schoolID, classID }: { schoolID: string; classID: string }) =>
				`${ApiRoutes.CLASS.replace("{school_id}", schoolID).replace(
					"{class_id}",
					classID,
				)}`,
		}),
		getSubjects: builder.query({
			query: (schoolID: string) =>
				`${ApiRoutes.SUBJECT.replace("{school_id}", schoolID)}`,
		}),
	}),
});
export { classApi };
export const { useGetClassQuery, useGetClassesQuery, useGetSubjectsQuery } =
	classApi;
