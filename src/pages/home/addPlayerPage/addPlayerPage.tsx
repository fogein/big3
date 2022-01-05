import { AddPlayer } from '../../../UI/addPlayer/addPlayer'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
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
