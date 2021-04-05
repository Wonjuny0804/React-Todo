import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './storage'
// Redux 상태 지속을 위한 스토어, 리듀서
import { persistStore, persistReducer } from 'redux-persist'
// React 통합을 위한 Redux Persist 게이트
import { PersistGate } from 'redux-persist/integration/react'
// 웹 LocaStorage
import storage from 'redux-persist/lib/storage'

/* persist store  -------------------------------------------------------------------------- */

// Redux 상태 지속 설정
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos']
};

// Redux 상태 지속을 위한 리듀서
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* store -------------------------------------------------------------------------- */

const store = createStore(persistedReducer);

// Redux 상태 지속을 위한 스토어
const persistor = persistStore(store);

/*  store provider wrapper component -------------------------------------------------------------------------- */


export const StoreProvider = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}