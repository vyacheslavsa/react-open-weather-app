const defaultState = {//значение по умолчанию
  cash: 0,
  currentWeather: {},
  errors: {},
  loading: null
};

const allActions = {
  ADD_CASH: 'ADD_CASH',
  GET_DATA_WEATHER: 'GET_DATA_WEATHER',
  DETECT_ERROR: 'DETECT_ERROR',
  CHANGE_LOADING: 'CHANGE_LOADING'
}

//action = {type:"", payload:""} - формат объекта type - action значение ,payload - новое значение
export const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case allActions.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };//первый параметр текущее состояние скопированно, второй действие которое мы выплняем
    case allActions.GET_DATA_WEATHER:
      return { ...state, currentWeather: action.payload };
    case allActions.DETECT_ERROR:
      return { ...state, errors: action.payload.message };
    case allActions.CHANGE_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const getWeather = (payload) => ({ type: allActions.GET_DATA_WEATHER, payload })
export const detectError = (payload) => ({ type: allActions.DETECT_ERROR, payload })
export const isLoading = (payload) => ({ type: allActions.CHANGE_LOADING, payload })
