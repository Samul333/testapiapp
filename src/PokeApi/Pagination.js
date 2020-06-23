import React from 'react'

function Pagination({gotoNextPage,gotoPrevious}) {
    console.log(gotoPrevious)
    console.log(gotoNextPage)
    return (
        <div>
          {gotoPrevious && <button onClick ={gotoPrevious}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage} >Next</button>}
        </div>
    )
}

export default Pagination
