import React from "react"


const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className="pa2">
         <input className="pa3 ba b--green bg-lightest-blue" type="search" onChange={searchChange} placeholder="Search Robots"/>
        </div>
    )
}

export default SearchBox