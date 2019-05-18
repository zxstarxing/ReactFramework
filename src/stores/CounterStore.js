import { observable, computed, action } from "mobx";

class CounterStore {
  @observable count = 0;
  @action
  Increment() {
    this.count++;
  }

  @action
  Decrement() {
    this.count--;
    console.log(this.count);
  }

  @computed
  get CountShowProperty() {
    return "现在数值是:" + this.count;
  }

  @computed
  get CountTodoShowProperty(){
    return "我的是tolist专用的，现在数值是:" + this.count;
  }
}
export default CounterStore;
