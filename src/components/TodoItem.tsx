import React from 'react'

import TodoItemClass from '../stores/todoItem'
import { useStore } from '../hooks/useStore'

import { Checkbox } from './StyledUI/Checkbox'
import { RemoveButton } from './StyledUI/RemoveButton'

interface Props {
  todo: TodoItemClass
}

export const TodoItem = ({ todo }: Props) => {
  const todoList = useStore()

  return (
    <>
      <span>{todo.text}</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox onChange={() => todoList.completeTodo(todo)} defaultChecked={todo.isDone} />
        <RemoveButton onClick={() => todoList.removeTodo(todo)} />
      </div>
    </>
  )
}
