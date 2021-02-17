import * as types from "../types";

const initialState = {
  post: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
