import React from 'react'
import search from '../../../assets/images/search.svg'
import './Search.css'

export const Search:React.FC = () => {
  return (
    <form className="search-form" action="#" method="#">
        <input className="search-input" type="text" name="search" id="search" placeholder="Search..."/>
        <button className="search-button" type="submit"><img src={search} alt="search" /></button>
      </form>
  )
}
