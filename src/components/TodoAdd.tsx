import React, { useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { onEnterPress } from '../hooks/onEnterPress'

export const TodoAdd = () => {
  const [newTodo, setTodo] = useState('')
  const todoList = useStore()

  const addTodo = () => {
    todoList.addTodo(newTodo)
    setTodo('')
  }

  return useObserver(() => (
    <div className="todo-add">
      <input type="text" value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={e => setTodo(e.target.value)} />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  ))
}
