import { combineReducers, createStore, applyMiddleware } from "redux";
import { GetReduser } from '../redusers/GetReduser'
import thunk from 'redux-thunk'

const Reduser = combineReducers({//combineReducers функция которая объединяет редюсеры
  getWeather: GetReduser
});

export const store = createStore(
  Reduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))//привязываем redux-dev-tools
);