import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
   
    return (
        <div id="nav-body"className="nav-body">
              <h1 className="logo"> Logo</h1>   

              <ul>
                  <Link className="link" to ="/todo"> <li> Todo App </li></Link>
                 
                  <Link className="link" to ="/currency"> <li> Currency App </li></Link>
                  <Link className="link" to ="/weather"> <li> Weather App </li></Link>
                  {/* <Link className="link" to ="/dota2"> <li> Dota 2 App </li></Link> */}
                  <Link className="link" to ="/recipes"> <li>Recipies App</li></Link>
                  <Link className = "link" to ="/movie"><li>Movie Search</li></Link>
                  <Link className = "link" to ="/pokedex"><li>Pokedex</li></Link>
                  </ul>   
        </div>
    )
}

export default Nav
