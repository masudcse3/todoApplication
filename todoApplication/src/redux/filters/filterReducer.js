/** @format */

import { COLOR_CHANGE, STATUS_CHANGE } from "./actionTypes";

/** @format */
const initialState = {
  status: "All",
  colors: [],
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case COLOR_CHANGE:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
