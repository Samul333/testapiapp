import React from 'react'
import style from './movie.module.css'
function Popup({closePopup,selected}) {
    return (


        <div className = {style.popup}>
            <div className={style.popupWrapper}>
                    <header>
            <h1>{selected.Title}</h1>

                    </header>

                    <content>
        <div className={style.left}>
            <img src={selected.Poster}/>

        </div>

        <div className={style.right}>
     <span>   Production: {selected.Production} </span> <br/>
        {selected.Plot}<br/>
        {selected.Released} <br/>
        {selected.Runtime} <br/>
        {selected.Year} <br/>



        </div>
        <button onClick={closePopup}>Close</button>

                    </content>
            </div>
            {console.log(selected)}
            
        </div>
    )
}

export default Popup
