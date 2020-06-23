import React from 'react'
import style from './movie.module.css'
function DisplayResult({movie,load,index}) {
    return (
        <div className ={style.display} key={index} onClick={()=>load(movie.imdbID)}>
            
            <img src = {movie.Poster}/>
    <h3>{movie.Title}</h3>


            
        </div>
    )
}

export default DisplayResult
