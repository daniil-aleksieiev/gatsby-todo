import { useContext } from 'react'
import { StoreContext } from '../stores/provider'
import { TodoList } from '../stores/todoList'

export const useStore = (): TodoList => useContext(StoreContext)
