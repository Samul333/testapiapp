import React from 'react'

function RecipeList({recipes}) {

  const Items =   recipes.map(item=>{
        return(
            <div className = "recipe-card" key ={item.recipe.label}>
               <h1> {item.recipe.label} </h1>
                       <img src={item.recipe.image}/>
                       <h3>Ingredients</h3>
                        <ol>
                                {item.recipe.ingredients.map(item=>{
                                   return( <li>{item.text}</li>)
                                }) }
                            </ol>
                
                
                </div>
        )
    })

    return (
        <div className="recipe-grid">
            {Items}
        </div>
    )
}

export default RecipeList
