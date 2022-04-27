import { actionsArray } from "../actions/actions";
const defaultState = {//значение по умолчанию
  getData: {},
};

//action = {type:"", payload:""} - формат объекта type - action значение ,payload - новое значение
export const GetReduser = (state = defaultState, action) => {
  switch (action.type) {
    case actionsArray.getCurrentWeather:
      return { ...state, getData: action.payload };//первый параметр текущее состояние скопированно, второй действие которое мы выплняем 
    default:
      return state;
  }
};