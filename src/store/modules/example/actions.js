//arquivo responsável por disparar as ações
//separar os types em arquivo individual para evitar duplicações
import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
export function clicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}
export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
