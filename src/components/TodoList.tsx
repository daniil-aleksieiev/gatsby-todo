import React from 'react'
import { useObserver } from 'mobx-react-lite'
import shortid from 'shortid'
import { css } from '@emotion/core'

import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { TodoItem } from './TodoItem'
import { ListItemWrapper } from './StyledUI/ListItem'

const TodoListWrapper = css({
  padding: '0',
  listStyleType: 'none',
  width: '100%'
})

export const TodoList = () => {
  const todoList = useStore()

  return useObserver(() => (
    <ul className="todo-list" css={TodoListWrapper}>
      {todoList.openTodos.map(todo => (
        <ListItemWrapper key={shortid.generate()}>
          <TodoItem todo={todo} />
        </ListItemWrapper>
      ))}
    </ul>
  ))
}
