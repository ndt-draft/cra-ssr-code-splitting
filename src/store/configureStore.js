import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { appReducer } from './appReducer';

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(composeWithDevTools(
  applyMiddleware(ReduxThunk)
))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
