import React,{useState,useEffect} from 'react'

//Components
import ListItems from './ListItems'

function TodoIndex() {

    const [search,setSearch]=useState('')
    const[todo,setTodo]=useState({text:'',key:''})
    const[finalList,setFinalList]=useState([])
    const[query,setQuery]= useState('')
    let index = 0

    const handleInput =async()=>{
      
     
        document.getElementById('todo-input').value=''
         

        if(todo.text !== ""){
                const newItems = [...finalList, todo]

                await setFinalList(newItems)
                

        }


        setTodo({text:'',key:''})

       

        
    }

    const handleDelete=(key)=>{
       const filtered = finalList.filter(item=>
        item.key!==key);
        setFinalList(filtered)
        console.log(key)
    }
    const handleInputEnter=async(e)=>{
        if(e.key==="Enter"){

            document.getElementById('todo-input').value=''
         

            if(todo.text !== ""){
                    const newItems = [...finalList, todo]
    
                    await setFinalList(newItems)
                    
    
            }
    
    
            setTodo({text:'',key:''})
    
           

        }
    }
    return (
        <div className="todo-index">
                <h1>Todo Application</h1>
                <div className="input-section">
                <input onKeyPress={handleInputEnter} id="todo-input" type="text" onChange={async e=> await setTodo({text:e.target.value,key:Date.now()})}/>
                <button className="button-search" onClick = {handleInput}>Add</button>
            </div>
            <div className = "list-items">

                <ListItems todos={finalList}
                            deleteItems={handleDelete}/>
            </div>
        </div>
    )
}

export default TodoIndex
