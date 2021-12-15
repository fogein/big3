
import { AddTeam } from '../../../UI/addTeam/addTeam'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'

import cls from './addTeamPage.module.scss'



export const AddTeamPage: React.FC = () => {
 
  
  
  
    return (
  
        <div className={cls.bg}>
          <Header/>
          <Navbar/>
          <BurgerMenuSidebar/>
            <div className={cls.mainContainer}>
            <AddTeam />
            </div>
        </div>
    )
  
  }
