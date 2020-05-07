import React from 'react'
import { useObserver } from 'mobx-react-lite'
import shortid from 'shortid'

import { useStore } from '../hooks/useStore'
import 'mobx-react-lite/batchingForReactDom'

import { TodoItem } from './TodoItem'
import { ListItemWrapper } from './StyledUI/ListItem'

export const TodoCompleted = () => {
  const todoList = useStore()

  return useObserver(() => (
    <div className="todo-completed">
      {todoList.finishedTodos.length ? (
        todoList.finishedTodos.map(todo => (
          <ListItemWrapper key={shortid.generate()}>
            <TodoItem todo={todo} />
          </ListItemWrapper>
        ))
      ) : (
        <h2>No completed tasks</h2>
      )}
    </div>
  ))
}
