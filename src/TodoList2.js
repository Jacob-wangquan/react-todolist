import React, {Component, Fragment} from 'react';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList2 extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        
        // 订阅变化
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue} 
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        //使用thunk
        //const action = getTodoList();
        //store.dispatch(action);
       
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        // 同步数据
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM
        // };
        const action = getAddItemAction();
        // 发送事件
        store.dispatch(action);
    }

    handleItemDelete(index){
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // };
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList2;