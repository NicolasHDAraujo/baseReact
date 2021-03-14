import * as types from '../types';

const initialState = {
  botaoClicado = false,
}

export default function (state = initialState, action) {
  switch(action.type) {//utilizando saga para intervir e atualizar o estado de acordo com a ação
    case types.BOTAO_CLICADO_SUCCSESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;//alterando o valor do novo estado
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    default:
      return state;
  }
}
