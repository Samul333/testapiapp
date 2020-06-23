import React, { useState } from 'react'
import style from './movie.module.css'
import { API_KEY } from '../config'
import axios from 'axios'
import Result from './Result'
import Popup from './Popup'
function MovieIndex() {

    const[search,setSearch]= useState('')
   
    const[movies,setMovies]= useState([])

    const[selected,setSelected]=useState({})



    const loadData = e =>{
        
        if(e.key==='Enter'){
           
            axios.get(`${API_KEY}&s=${search}`)
            .then(res=>{
                setMovies(res.data.Search)
            })
        }
    }


    const loadSelected=(id)=>{
            axios.get(`${API_KEY}&i=${id}`)
            .then(res=>res.data)
            .then(data=>{

                setSelected(data)

            })
    }

    const closePopup=()=>{

        setSelected({})        
    }


    return (
        <div>
            {console.log(selected)}
            <div className={style.wrapper}>

                <div className={style.container}>

                    <div className={style.header}>

                        <h2>Movie Database</h2>


                        <input type="text" onChange={(e)=>setSearch(e.target.value)}
                           
                           onKeyPress={loadData}
                        
                        />

                    </div>

                <Result movies={movies} loadSelected={loadSelected}/>

                </div>



            </div>

            {(typeof selected.Title != "undefined") ? <Popup selected={selected} closePopup={closePopup}/>
       : false }


        </div>
    )
}

export default MovieIndex
