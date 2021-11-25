
import { AddTeam } from '../../../UI/addTeam/addTeam'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'

import cls from './addTeamPage.module.scss'



export const AddTeamPage: React.FC = () => {
 
  
  
  
    return (
  
        <div className={cls.bg}>
          <Header/>
          <Navbar/>
            <div className={cls.mainContainer}>
            <AddTeam />
            </div>
        </div>
    )
  
  }