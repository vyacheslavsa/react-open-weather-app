import { combineReducers, createStore, applyMiddleware } from "redux";
import { reduser } from '../redusers/reduser'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const combine = combineReducers({//combineReducers функция которая объединяет редюсеры
  data: reduser
});

export const store = createStore(
  combine,
  composeWithDevTools(applyMiddleware(thunk))//привязываем redux-dev-tools
);