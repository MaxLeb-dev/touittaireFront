import '../styles/globals.css'
import Head from 'next/head'

// Redux Imports
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from '../reducers/user'
import touit from '../reducers/touit'

// Redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ user, touit })
const persistConfig = {
  key: 'touittaire',
  storage,
  blacklist: ['touit'],
}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

// const store = configureStore({
//   reducer: { user, touit },
//  });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Touittaire</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
