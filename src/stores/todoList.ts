import { action, computed, observable } from 'mobx'
import TodoItem from './todoItem'

export class TodoList {
  @observable.shallow list: TodoItem[] = []

  constructor(todos: string[]) {
    todos.forEach(this.addTodo)
  }

  @action
  addTodo = (text: string) => {
    this.list.push(new TodoItem(text))
  }

  @action
  removeTodo = (todo: TodoItem) => {
    this.list.splice(this.list.indexOf(todo), 1)
  }

  @action
  completeTodo = (todo: TodoItem) => {
    todo.isDone = !todo.isDone
  }

  @computed
  get finishedTodos(): TodoItem[] {
    return this.list.filter(todo => todo.isDone)
  }

  @computed
  get openTodos(): TodoItem[] {
    return this.list.filter(todo => !todo.isDone)
  }
}
