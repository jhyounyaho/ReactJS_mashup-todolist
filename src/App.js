import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './Components/TodoCreate.js';
import TodoHead from './Components/TodoHead.js';
import TodoList from './Components/TodoList.js';
import TodoTemplate from './Components/TodoTemplate.js'
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
