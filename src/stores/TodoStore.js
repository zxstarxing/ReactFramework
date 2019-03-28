import { observable, computed, action } from "mobx";

class TodoStore {
    @observable todoList = [];
    @action
    Add({ todo, time }) {
        this.todoList.push({ todo, time });
    }
}
export default TodoStore;