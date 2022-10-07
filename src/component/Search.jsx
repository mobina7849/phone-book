import React from 'react';
import './Search.style.css'
const Search = ({setSearch,setFavoriteStatus}) => {
    const handleStatus=(e)=>{
        //console.log('lkj')
        setFavoriteStatus(e.target.value)
      }
      const handleSearch=(e)=>{
        setSearch(e.target.value.toLowerCase())
        //setFiltered(filtered.filter())
      }
    return ( 
        <div className="searchAndSelect" >
            <input className="fa inputSearch" type={"search"} onChange={handleSearch} placeholder="&#xf002;search..."/>
            <div className="selectSection">
                 <select  className="select" onChange={handleStatus}>
                    <option className="" name="all" value={"all"}>All</option>
                    <option className="" name="favorite"value={"favorite"}>Favorite</option>
                    <option className="" name="usual"value={"usual"}>Usual</option>
                </select>
             </div>
        </div>
     );
}
 
export default Search;