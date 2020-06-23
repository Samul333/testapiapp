import React, { useState, useEffect } from 'react'
import style from './pokemon.module.css'
import { POKE_API } from '../config'
import axios from 'axios'
import Pagination from './Pagination'
import Popup from './Popup'
//Components
import PokemonList from './PokemonList'


function PokedexIndex() {

    const [search, setSearch] = useState('')
    const [pokeList, setPokeList] = useState([])
    const [prevUrl, setPrevUrl] = useState('')
    const [nextUrl, setNextUrl] = useState('')
    const [currentUrl, setCurrentUrl] = useState(POKE_API)
    const [popUpState,setPopUpState]=useState(false)
    const[pokeInfo,setPokeInfo] = useState([])


    useEffect(() => {
        axios.get(currentUrl)
            .then(res => res.data)
            .then(data => {
                setPokeList(data.results)
                setPrevUrl(data.previous)
                setNextUrl(data.next)
            })

    }, [currentUrl])

    const request = (e) => {
        if(e.key ==="Enter"){
            setPopUpState(true)

        }
    }

    const gotoNextPage= ()=>{

            setCurrentUrl(nextUrl)
    }

    const gotoPreviousPage=()=>{
        setCurrentUrl(prevUrl)
    }

    const togglePopup = (name) =>{
        setPopUpState(!popUpState)
        
        getPokemon(name)
    }

    const getPokemon=(name)=>{
        if(!popUpState){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                setPokeInfo(data)

            })
        }
    }
    return (
        <div className={style.wrapper}>

            <div className={style.header}>

                <h1>Pokedex</h1>

                <input type="text" placeholder="Search for pokemon" onChange={(e) => setSearch(e.target.value)}

                    onKeyPress={request}

                />


            </div>

            <div className={style.body}>

                <div className={style.content}>
                    <PokemonList data={pokeList} toggle ={togglePopup} />
                </div>



            </div>
            <div className={style.pagination}>

                <Pagination gotoNextPage={nextUrl ? gotoNextPage : null } 
                            gotoPreviousPage={prevUrl? gotoPreviousPage : null}
                />
            </div>

            {popUpState? <Popup info ={pokeInfo} togglePopup={togglePopup}/> :null}
        </div>
    )
}

export default PokedexIndex
