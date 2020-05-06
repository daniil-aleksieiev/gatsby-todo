import React from 'react'
import { useObserver } from 'mobx-react-lite'
import shortid from 'shortid'

import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoList = useStore()

  return useObserver(() => (
    <ul className="todo-list">
      {todoList.openTodos.map(todo => (
        <li key={shortid.generate()}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  ))
}
