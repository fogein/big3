import React from 'react'
let search = require ('../../../assets/images/search.svg')
let classes = require('./Search.module.scss')

let cls :any = classes

export const Search:React.FC = () => {
  return (
    <form className={cls.searchForm} action="#" method="#">
        <input className={cls.searchInput} type="text" name="search" id="search" placeholder="Search..."/>
        <button className={cls.searchButton} type="submit"><img src={search} alt="search" /></button>
      </form>
  )
}
