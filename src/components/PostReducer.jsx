export const POCETNO_STANJE = {
  loading: true,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
      };
    case "FETCH_USPJEH":
      return {
        ...state,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
