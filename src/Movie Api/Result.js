import React from 'react'
import style from './movie.module.css'
import DisplayResult from './DisplayResult'
function Result({movies,loadSelected}) {


    return (
        <div className = {style.result}>
                {movies.map((movie,i)=>(
                        <DisplayResult movie={movie}
                        load={loadSelected}
                        index={i}
                        />

                ))}
        </div>
    )
}

export default Result
