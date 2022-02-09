import { AddPlayer } from '../../../UI/addPlayer/addPlayer'
import { BurgerMenuSidebar } from '../../../UI/BurgerMenu/burgerMenuSidebar'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/navbar/Navbar'
import teamsImg  from '../../../assets/images/group_person.svg'
import playersImg  from '../../../assets/images/activePlayers.svg'
import cls from './addPlayerPage.module.scss'



export const AddPlayerPage: React.FC = () => {
 
  
  
  
    return (
  
        <div className={cls.bg}>
          <Header/>
          <Navbar
          teamImage={teamsImg}
          playersImage={playersImg}
          />
          <BurgerMenuSidebar/>
            <div className={cls.mainContainer}>
            <AddPlayer />
            </div>
        </div>
    )
  
  }
