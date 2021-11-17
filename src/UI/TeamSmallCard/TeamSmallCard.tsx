import cls from './teamSmallCard.module.scss'
import { ITeamData } from '../../api/dto/teams'  



export const TeamSmallCard = (props:ITeamData) => {
  
  return (
    // Team card   
      
       
        <li className={cls.smallCardItem} key={props.id}>
        <div className={cls.smallCardTop}>
          <img src={props.imageUrl} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDeskription}>
            <h4 >{props.name}</h4>
            <p className={cls.smallCardP}>Year of foundation: {props.foundationYear}</p>
          </div>
          </div>
        </li>
       
    // Team card
  )
}
