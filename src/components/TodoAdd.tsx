import React, { useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import { css } from '@emotion/core'
import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { onEnterPress } from '../hooks/onEnterPress'

import { Input } from './StyledUI/Input'
import { AddButton } from './StyledUI/AddButton'

const TodoAddWrapper = css({
  display: 'flex',
  position: 'relative',
  margin: '30px 0'
})

export const TodoAdd = () => {
  const [newTodo, setTodo] = useState('')
  const todoList = useStore()

  const addTodo = () => {
    todoList.addTodo(newTodo)
    setTodo('')
  }

  return useObserver(() => (
    <div className="todo-add" css={TodoAddWrapper}>
      <Input value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e: any) => setTodo(e.target.value)} />
      <AddButton onClick={addTodo} />
    </div>
  ))
}
