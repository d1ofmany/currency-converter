import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Grid } from 'material-ui';

import Header from './Header';
import Content from './Content';

const App = ({ store, persistor }) => (
    <Provider store={store}>
        <PersistGate 
          persistor={persistor}>
            <Grid container spacing={24} justify="center">
                <Grid item xs={12}>
                    <Header />
                    <Content />
                </Grid>
            </Grid>
        </PersistGate>
    </Provider>
);

export default App;
