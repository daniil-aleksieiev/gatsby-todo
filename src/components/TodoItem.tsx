import React from 'react'

import TodoItemClass from '../stores/todoItem'
import { useStore } from '../hooks/useStore'

interface Props {
  todo: TodoItemClass
}

export const TodoItem = ({ todo }: Props) => {
  const todoList = useStore()

  return (
    <>
      <span>{todo.text}</span>
      <div>
        <input type="checkbox" onChange={() => todoList.completeTodo(todo)} defaultChecked={todo.isDone} />
        <button type="button" onClick={() => todoList.removeTodo(todo)}>
          X
        </button>
      </div>
    </>
  )
}
