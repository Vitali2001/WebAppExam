import { CurrentStudentState } from "./types.ts";

const initialState : CurrentStudentState = {
  currentStudent: undefined,
  selected: false
}

export const currentStudentReducer = (state = initialState, action: any): CurrentStudentState => {
    switch (action.type) {
      case "CLEAR_CURRENT_STUDENT":
        return {
          ...state,
          selected: false,
          currentStudent: undefined
        };
      case "SET_CURRENT_STUDENT":
        return {
          ...state,
          selected: true,
          currentStudent: action.payload,
        };
    }
    return state
  };