import React,{useState,useEffect} from 'react'


function PokeDetails(props) {

const url = `http://${props.match.params.url}/${props.match.params.api}/${props.match.params.v}/${props.match.params.pokemon}/${props.match.params.id}`
const[pokeData,setPokeData]=useState([])


useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        setPokeData(data)});

    
},[])
    return (
        <div className="div poke-details-wrapper">
        <div className="poke-details-display-card">
           {pokeData.name}
           <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.match.params.id}.png`}></img>
        </div>
        </div>
    )
}

export default PokeDetails
