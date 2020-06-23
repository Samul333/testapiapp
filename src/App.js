import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link}from 'react-router-dom'

//Components
import Nav from './components/Nav'
import TodoIndex from './TodoComponents/TodoIndex'
import PokeApi from './PokeApi/PokeIndex'
import CurrencyIndex from './CurrencyComponent/CurrencyIndex'
import WeatherIndex from './WeatherComponents/WeatherIndex'
import PokeDetails from './PokeApi/PokeDetails'
import DotaIndex from './Dota2Api/DotaIndex'
import RecipeIndex from './RecipiesApi/RecipeIndex'
import PokedexIndex from './Pokedex/PokedexIndex'
//Css
import './App.css';
import PokeIndex from './PokeApi/PokeIndex';
import MovieIndex from './Movie Api/MovieIndex';


function App() {
  return (
    <Router>
    <div className="App">
       <nav>
      <Nav/>
     


       </nav>
       <Route path="/todo" exact component= {TodoIndex}/>
       <Route path="/poke" exact component= {PokeIndex}/>
       <Route path="/currency" exact component= {CurrencyIndex}/>
       <Route path="/weather" exact component= {WeatherIndex}/>
       <Route path="/poke/:url/:api/:v/:pokemon/:id"  component = {PokeDetails}/>
       <Route path = "/dota2" exact component = {DotaIndex}/>
       <Route path = "/recipes" exact component = {RecipeIndex}/>
       <Route path = "/movie" exact component = {MovieIndex}/>
       <Route path="/pokedex" exact component = {PokedexIndex}/>
    </div>
    </Router>
  );
}

export default App;
