import React from 'react';
import styled from 'styled-components'
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlcok = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlcok>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))} 
    </TodoListBlcok>
  )
}

export default TodoList;