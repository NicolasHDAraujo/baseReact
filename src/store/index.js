import { persistStore } from 'redux-persist';
import { createStore , applyMiddleware} from 'redux';
import  createSagaMiddleware  from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer'; //permite exportar os reducers
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware)); //recebe o reducer, que irá escutar as ações e executar determinada ação

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;


//Todos os reducer ouvirão todas as ações que forem disparadas, cabendo ao dev escutar a ação especifica
//que quer ouvir, geralmente separa os reducer em modulos
//Usar redux quando sentir que a aplicação precisa de um estado global
