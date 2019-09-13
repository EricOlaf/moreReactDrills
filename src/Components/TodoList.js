import React from 'react';

const TodoList = (props) => {
    return(
        <h2 key={props.key}>{props.item}</h2>
    )
}

export default TodoList;