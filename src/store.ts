import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';


declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
    ))
);
