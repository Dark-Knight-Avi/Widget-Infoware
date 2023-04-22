const initialState = null;

const freducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchForecast":
      return {
        ...state,
        data: action.payload.data, 
      };
    default:
      return state;
  }
};

export default freducer;