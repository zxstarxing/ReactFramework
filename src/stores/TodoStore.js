import { observable, computed, action } from "mobx";
import TodoModel from "../models/TodoModel";

class TodoStore {
  @observable todoList = [
    {
      key: "1",
      todoName: "吃饭饭",
      addTime: "2019-03-26 17:00"
    },
    {
      key: "2",
      todoName: "洗澡澡",
      addTime: "2019-03-26 18:00"
    }
  ];
  @action
  Add({ todo, time }) {
    this.todoList.push(new TodoModel(todo, time).toObject());
  }
  @computed get List() {
    return this.todoList;
  }
}
export default TodoStore;
