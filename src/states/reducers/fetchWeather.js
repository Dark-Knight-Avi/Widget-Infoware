const initialState = null;

const wreducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchWeather":
      return {
        ...state,
        data: action.payload.data, 
      };
    default:
      return state;
  }
};

export default wreducer;