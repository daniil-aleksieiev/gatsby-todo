import { observable } from 'mobx'

export default class TodoItem {
  id = Date.now()

  @observable text = ''

  @observable isDone = false

  constructor(text: string) {
    this.text = text
  }
}
