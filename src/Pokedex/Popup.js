import React,{useState} from 'react'
import style from './pokemon.module.css'
function Popup({togglePopup,info}) {

        const imagePoke = info.sprites
    return (
        <div className={style.popup}>

               <div className={style.pokecard}>


              <h1>{info.name} </h1> 
               {info.id}
               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`} />
               <button onClick={togglePopup}>CLose</button>
               </div>
               
               

              
        </div>
    )
}

export default Popup
