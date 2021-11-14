import React from 'react'
import search from '../../../assets/images/search.svg'
let classes = require('./Search.module.scss')

let cls :any = classes

export const Search = (props:any) => {


  return (
    <form className={cls.searchForm} action="#" method="#">
        <input className={cls.searchInput} 
        type="text" 
        name="search" 
        id="search" 
        placeholder="Search..."
        onChange={(e:any) =>
          props.state(e.target.value)}
        />
        <button className={cls.searchButton} type="submit"><img src={search} alt="search" /></button>
      </form>
  )
}


