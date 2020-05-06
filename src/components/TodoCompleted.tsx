import React from 'react'
import { useObserver } from 'mobx-react-lite'
import shortid from 'shortid'

import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { TodoItem } from './TodoItem'

export const TodoCompleted = () => {
  const todoList = useStore()

  return useObserver(() => (
    <div className="todo-completed">
      todo completed
      {todoList.finishedTodos.map(todo => (
        <li key={shortid.generate()}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </div>
  ))
}
