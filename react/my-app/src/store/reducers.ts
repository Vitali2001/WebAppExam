import { combineReducers } from "redux";
import { studentReducer } from "../components/students/reducer.ts";
import { currentStudentReducer } from "../components/curentStudent/reducer.ts"

export const rootReducer = combineReducers({
    students: studentReducer,
    currentStudent: currentStudentReducer
});

export type RootState = ReturnType<typeof rootReducer>;