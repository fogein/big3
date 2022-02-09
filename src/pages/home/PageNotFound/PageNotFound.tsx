import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NotFound from '../../../assets/images/PageNotFound.png'
import cls from './PageNotFound.module.css'

export const PageNotFound: React.FC = () => {
  let location =useLocation()

  return (
    <>
      <div className={cls.pageNotFoundContainer}>
        <img src={NotFound} alt="404" className={cls.PNFImg} />
        <div className={cls.pageNFBlock2}>
        <p className={cls.red}>Page not found</p>
        <p className={cls.notRed}>Sorry, we can’t find what you’re looking for</p>
        <p>No match for <u>{location.pathname}</u></p>
        <Link to="/teams">Back to teams page here!</Link>
        </div>
      </div>
    </>
  )
}
