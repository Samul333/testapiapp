import React,{useEffect,useState} from 'react'
import RecipeList from './RecipeList'

function RecipeIndex() {
    const App_ID = 'd25aab51';
    const App_key = '7dc480da53d6b6fa42fb12cb47447bcd';

    const[recipes,setRecipes]=useState([])
    const[search,setSearch] = useState()
    const[query,setQuery] = useState('chicken')


    useEffect(()=>{
                fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.hits)
                    setRecipes(data.hits)})
    },[query])

    const inputHandler = e=>{
       
        if(e.key==="Enter"){
            document.getElementById('recipe-input').value=""
            setQuery(search)
        }
    }
return (
        <div className= "recipe-wrapper">
            <div className="recipe-header">
                <input id="recipe-input"placeholder="Search for recipies here.."className= "recipe-input-bar"type = "text" onChange={e=>setSearch(e.target.value)} onKeyPress={inputHandler}/>
            </div>
            <div className="recipes-grid-wrapper">

                <RecipeList recipes={recipes}/>
            </div>
            
        </div>
    )
}

export default RecipeIndex
