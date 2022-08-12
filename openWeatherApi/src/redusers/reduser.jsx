const defaultState = {//значение по умолчанию
    cash: 0,
    currentWeather: {},
    errors: {},
    loading: true,
    searchLoading: true,
    currentCity: [],
    resultSearch: [],
    interfaceLanguage: 'EN'
};

const allActions = {
    ADD_CASH: 'ADD_CASH',
    GET_DATA_WEATHER: 'GET_DATA_WEATHER',
    DETECT_ERROR: 'DETECT_ERROR',
    CHANGE_LOADING: 'CHANGE_LOADING',
    SEARCH_LOADING: 'SEARCH_LOADING',
    GET_CITY: 'GET_CITY',
    RESULT_SEARCH: 'RESULT_SEARCH',
    SET_LANGUAGE: 'SET_LANGUAGE'
}

//action = {type:"", payload:""} - формат объекта type - action значение ,payload - новое значение
export const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case allActions.ADD_CASH:
            return {...state, cash: state.cash + action.payload};//первый параметр текущее состояние скопированно, второй действие которое мы выплняем
        case allActions.GET_DATA_WEATHER:
            return {...state, currentWeather: action.payload};
        case allActions.DETECT_ERROR:
            return {...state, errors: action.payload.message};
        case allActions.CHANGE_LOADING:
            return {...state, loading: action.payload};
        case allActions.SEARCH_LOADING:
            return {...state, searchLoading: action.payload};
        case allActions.GET_CITY:
            return {...state, currentCity: action.payload};
        case allActions.RESULT_SEARCH:
            return {...state, resultSearch: action.payload};
        case allActions.SET_LANGUAGE:
            return {...state, interfaceLanguage: action.payload};
        default:
            return state;
    }
};

export const getWeather = (payload) => ({type: allActions.GET_DATA_WEATHER, payload});
export const detectError = (payload) => ({type: allActions.DETECT_ERROR, payload});
export const isLoading = (payload) => ({type: allActions.CHANGE_LOADING, payload});
export const searchLoading = (payload) => ({type: allActions.SEARCH_LOADING, payload});
export const getCity = (payload) => ({type: allActions.GET_CITY, payload});
export const getResultCities = (payload) => ({type: allActions.RESULT_SEARCH, payload});
export const setLanguage = (payload) => ({type: allActions.SET_LANGUAGE, payload});
