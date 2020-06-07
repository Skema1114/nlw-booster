import React from 'react';
import './App.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

/**
 * METODO ANTIGO DE ESCREVER
 *  return React.createElement('h1', {
 *    children: 'Hello World'
 *  });
 *
 *
 * JSX: sintaxe de XML dentro do Javascript
 * tanto que a extensão do arquivo é TSX, ou seja, Typescript com JSX, se fosse só
 *  TS, não seria permitido usar html aqui dentro no arquivo
 *
 * METODO NOVO DEPOIS DE ALGUMA ATUALIZAÇÃO
 *  return (
 *    <h1>Hello World</h1>
 *  );
 */