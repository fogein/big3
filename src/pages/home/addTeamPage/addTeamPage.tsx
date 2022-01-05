
import { AddTeam } from '../../../UI/addTeam/addTeam'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
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
