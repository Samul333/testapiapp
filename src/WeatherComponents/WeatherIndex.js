import React, { useEffetct, useState } from 'react'


const api = {
    key: "00dd2f1a0aced07b9738593b9cf02bdb",
    base: "https://api.openweathermap.org/data/2.5/"

}

function WeatherIndex() {
    
    
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

 
 
 

    const dateBuilder = (d) => {

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    const Search = async (e) => {
        if (e.key === "Enter") {
            await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setQuery('')
                    setWeather(result)
                    console.log(result)
                });
        }

    }



    return (
        <div className="weather-wrapper">
            <input type="text" className="search-bar"

                onChange={e => setQuery(e.target.value)}
                onKeyPress={Search}

            />

            <div className="date">
                {dateBuilder(new Date())}

            </div>

            {(typeof weather.main!="undefined")?(
                <div>
                <div className="location-box">

                    <div className="location">
                           {weather.name} ,{weather.sys.country}
                    </div>
                    </div>

                    <div className="weather-box">

                        <div className="temp">
                        {Math.round(weather.main.temp)}°c
                        </div>
                    </div>

                    <div className="weather">
                        {weather.weather[0].main}
                    </div>
                    </div>

            ):('')}
        </div>
    )
}

export default WeatherIndex
