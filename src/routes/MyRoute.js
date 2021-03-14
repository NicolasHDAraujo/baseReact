import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if(isClosed && !isLoggedIn) {// verificar se o usuario está logado ou se a rota é fechada
    return (
      <Redirect //redirecionar a pagina de login e após ele logar, direcionar a pagina em que ele estava
       to={{ pathname: '/login', state: {prevPath: rest.location.pathname } }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {//validando o component e o isClosed
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])// pode ser ou um elemento ou uma função
    .isRequired,
  isClosed: PropTypes.bool,
}
