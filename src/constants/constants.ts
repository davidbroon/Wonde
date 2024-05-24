export const API_URL = "https://api.wonde.com/v1.0";
export const MAX_ITEMS = 10;

export namespace Colors {
	export const PRIMARY500 = "#7c63e3";
	export const PRIMARY600 = "#29234d";
	export const NEUTRAL500 = "#ffffff";
	export const ACCENT500 = "ffa347";
}

export namespace ApiRoutes {
	export const EMPLOYEES = "/schools/{school_id}/employees/?has_class=true";
	export const EMPLOYEE =
		"/schools/{school_id}/employees/{employee_id}/?include=classes";
	export const CLASSES = "/schools/{school_id}/classes";
	export const CLASS =
		"/schools/{school_id}/classes/{class_id}/?include=students";
	export const SUBJECT = "/schools/{school_id}/subjects/";
}

export const API_ACCESS_TOKEN = "9ea019fb836e908ad4ff901c9fca62c4ddde79ba";

export const SCHOOL_ID = "A1930499544";
