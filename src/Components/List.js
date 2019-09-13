import React from 'react';
import Todo from './TodoList'

const List = (props) => {
    let task = props.list.map((e, i)=>{
        return <Todo item={e} key={i}/>
    })
    return ( 
    <div>
        {task}
    </div> 
    );
}
 
export default List;