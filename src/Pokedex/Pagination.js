import React from 'react'

function Pagination({gotoNextPage,gotoPreviousPage}) {
    return (
        <div>
            {gotoPreviousPage ? <button onClick={gotoPreviousPage}>Previous</button>:null}
            {gotoNextPage ? <button onClick={gotoNextPage}>Next</button>:null}
        </div>
    )
}

export default Pagination
