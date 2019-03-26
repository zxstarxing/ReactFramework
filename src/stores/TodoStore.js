import { observable, computed,action } from "mobx";
import { observer } from 'mobx-react';

@observer
class TodoStore {
    @observable TodoList = [];
    @action 
    Add() {

    }
}
export default Store