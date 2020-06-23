import React from 'react'
import {Link} from 'react-router-dom'

function PokeList({pokemon}) {

    const Items = pokemon.map(((p,index)=>{
        const url = p.url.replace(/^https?:\/\//,'')   
    return(<div className = "poke-card" key={url}>
     <Link className="poke-link"to ={`/poke/${url}`}><p onClick={()=>handleClick(index)}> {p.name} </p></Link>  
        </div>)
    }))

    const handleClick=(key)=>{
        console.log(key)
    }

    return (
        <div className="poke-grid" >
            {Items}
        </div>
    )
}

export default PokeList
