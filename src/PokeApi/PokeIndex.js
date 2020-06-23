import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeList from './PokeList'
import Pagination from './Pagination'


function PokeIndex() {


    const [search,setSearch] =useState('')
    const [pokeId,setPokeId]=useState(0)
    const [pokeDetailDisplay,setPokeDetailDisplay]= useState(false)
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPageUrl, setNextPageUrl] = useState('')
    const [previousPageUrl, setPreviousPageUrl] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(
            res => {
                setLoading(false)
                setNextPageUrl(res.data.next)
                setPreviousPageUrl(res.data.previous)
                setPokemon(res.data.results)
                setPokeId(res.data.id)
                
            }
        )
        console.log(pokemon)
        return () => {
            cancel();
        }
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }
    function gotoPreviousPage() {
        setCurrentPageUrl(previousPageUrl)
    }

    function handleInput(e){
        if(e.key === "Enter"){
            setPokeDetailDisplay(true)
        setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon/${search}`)
        }
    }
    if(pokeDetailDisplay) return(
        <div>
            You searched for <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}/>
            </div>
    )

    if(loading) return "Please wait while the data is being fetched.."

    return (
        <div>
            <div className="poke-display">
                <h1>Pokemon List</h1>
                <input type="text" placeholder="Search pokemon here..."onChange ={(e)=> setSearch(e.target.value.toLowerCase())} onKeyPress={handleInput}></input>

                <div ><PokeList pokemon={pokemon} /></div>

                <div className="pagination">

                    <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevious={previousPageUrl ? gotoPreviousPage : null} />
                </div>
            </div>

        </div>
    )
}

export default PokeIndex
