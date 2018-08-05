import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return (
            <Fragment>
                {/*Fragment是一个组件*/}
                {
                    //这是单行注释
                }
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    <input 
                      id='insertArea'
                      className='input-border'
                      value={this.state.inputValue} 
                      onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                <TodoItem 
                    content={item} 
                    index={index}
                    deleteItem={this.handleItemDelete} />
                {/*<li 
                    key={index} 
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}
                    >
                   
                </li>*/}
                </div>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        // 新版写法 异步
        this.setState(()=> ({
            inputValue: value
        }));
        // this.setState({
        //     inputValue: e.target.value
        // });
    }

    handleButtonClick(){
        this.setState((prevState)=> ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // });
    }

    handleItemDelete(index){
        
        this.setState((prevState)=> {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });

        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // });
    }
}

export default TodoList;