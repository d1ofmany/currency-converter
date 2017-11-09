import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import rates from './reducers/rates';
import results from './reducers/results';

const config = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(config, { rates, results });

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;
