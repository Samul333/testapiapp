import React,{useState,useEffect}from 'react'

function DotaIndex() {

    const[herolist,setHeroList]=useState([])

    const api = 'B7D72523908068CCE901924B734A9D2E'

    useEffect(()=>{
        fetch(`https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${api}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    )
}

export default DotaIndex
