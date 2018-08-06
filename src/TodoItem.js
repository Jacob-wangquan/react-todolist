import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render(){
        const {content} =  this.props;
        return (
            <div onClick={this.handleClick}> {content}</div>
        );
    }

    handleClick(){
        //修改父组件的list
        //this.props.deleteItem(this.props.index);
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    
}

export default TodoItem;