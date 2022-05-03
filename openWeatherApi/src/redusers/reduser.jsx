const defaultState = {//значение по умолчанию
  cash: 0,
  currentWeather: {},
  errors: {},
  loading: null
};

//action = {type:"", payload:""} - формат объекта type - action значение ,payload - новое значение
export const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };//первый параметр текущее состояние скопированно, второй действие которое мы выплняем
    case 'GET_DATA_WEATHER':
      return { ...state, currentWeather: action.payload };
    case 'DETECT_ERROR':
      return { ...state, errors: action.payload };
      case 'CHANGE_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const getWeather = (payload) => ({ type: 'GET_DATA_WEATHER', payload })
export const detectError = (payload) => ({ type: 'DETECT_ERROR', payload })
export const isLoading = (payload) => ({ type: 'CHANGE_LOADING' , payload})
