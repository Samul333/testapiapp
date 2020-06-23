import React from 'react'


function ListItems({todos,deleteItems}) {
        const todoItems = todos
        const Items = todoItems.map(item=>{
        return (<div onClick={()=>deleteItems(item.key)}className = "todo-items" key ={item.key}>{item.text}</div>)   
        })
    return (
        <div>
                {Items}
                
        </div>
    )
}

export default ListItems
