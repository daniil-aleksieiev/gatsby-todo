import { createContext } from 'react'
import { TodoList } from './todoList'

export const StoreContext = createContext<TodoList>({} as TodoList)
export const StoreProvider = StoreContext.Provider
