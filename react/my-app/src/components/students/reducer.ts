import { StudentsState } from "./types.ts";

const initialState : StudentsState = {
    list: [],
    loading: false
}

export const studentReducer = (state = initialState, action: any): StudentsState => {
    switch (action.type) {
      case "GET_LIST_STUDENT":
        return {
          ...state,
          loading: true,
        };
      case "GET_LIST_STUDENT_SUCCESS":
        return {
          ...state,
          loading: false,
          list: action.payload,
        };
      case "CLEAR_TABLE":
        return{
          list: [],
          loading: false
        }
    }
    return state
  };