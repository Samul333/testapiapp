import React from 'react'
import Pokemon from './Pokemon'
import style from './pokemon.module.css'
function PokemonList({data,toggle}) {
    return (
        <div className = {style.grid}>
            {data.map(item=>{

            return (<Pokemon Pokemon = {item} toggle={toggle}/>)
            })}
        </div>
    )
}

export default PokemonList
