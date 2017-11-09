import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store';

const { store, persistor } = configureStore();

ReactDOM.render(<App store={store} persistor={persistor} />, document.getElementById('root'));
