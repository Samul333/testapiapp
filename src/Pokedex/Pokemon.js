import React,{useState,useEffect} from 'react'
import style from './pokemon.module.css'
import Axios from 'axios'





function Pokemon({Pokemon,toggle}) {
    const[pokeImage,setPokeImage] =useState('') 
    const [types,setTypes] =useState([])
    useEffect(()=>{
        Axios.get(Pokemon.url)
        .then(res=>res.data)
        .then(data=>{
            setPokeImage(data.sprites.front_default)
            setTypes(data.types)
        })
    },[types])
    return (
        <div className={style.card} onClick={()=>toggle(Pokemon.name)}>
            {Pokemon.name}
            <img src={pokeImage}/>
            {types.map((item,i)=>{
                return(<div key={i}>{item.type.name}</div>)
            })}
        </div>
    )
}

export default Pokemon
