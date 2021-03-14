import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-DA-APLICACAO',
      storage,
      whitelist: ['example'] //o que quer que seja salvo do rootReducer
    },
    reducers
  );

  return persistedReducers;
}
