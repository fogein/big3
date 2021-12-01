import React from 'react'
import './burgerMenu.scss'
import { slide as Menu } from "react-burger-menu";

export const BurgerMenuSidebar = (props:any) => {
  return (
    <div className="containerBurgerMenu">
      <Menu {...props}>
    <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/burgers">
      Burgers
    </a>

    <a className="menu-item" href="/pizzas">
      Pizzas
    </a>

    <a className="menu-item" href="/desserts">
      Desserts
    </a>
  </Menu>
    </div>
  )
}
