
import { AddTeam } from '../../../UI/addTeam/addTeam'
import { BurgerMenuSidebar } from '../../../UI/BurgerMenu/burgerMenuSidebar'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/navbar/Navbar'
import playersImg  from '../../../assets/images/person.svg'
import teamImg  from '../../../assets/images/activeTeam.svg'
import cls from './addTeamPage.module.scss'



export const AddTeamPage: React.FC = () => {
 
  
  
  
    return (
  
        <div className={cls.bg}>
          <Header
          />
          <Navbar
          playersImage={playersImg}
          teamImage={teamImg}
          />
          <BurgerMenuSidebar/>
            <div className={cls.mainContainer}>
            <AddTeam />
            </div>
        </div>
    )
  
  }
