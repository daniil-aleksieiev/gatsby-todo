import * as React from 'react'

import { StoreProvider } from '../stores/provider'
import { TodoList } from '../stores/todoList'

import LayoutRoot from './root'
import LayoutMain from './main'

const todoList = new TodoList(['Task #1', 'Task #2', 'Task #3'])

const IndexProvider: React.FC = ({ children }) => (
  <StoreProvider value={todoList}>
    <LayoutRoot>
      <LayoutMain>{children}</LayoutMain>
    </LayoutRoot>
  </StoreProvider>
)

export default IndexProvider
