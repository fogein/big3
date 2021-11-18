import { addPlayer } from '../../../api/request/teamAndPlayersApi'; 

import cls from './add_button.module.scss';

export const AddButton = (props:any) => {


// Add team
const addPlayerHandler = async () =>{
  let testObject = {
    name: "player",
    team: "navi",
    number: "3",
    imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg"
  }
  let card = await addPlayer(testObject)
  props.filteredPlayers.push(card)
  let newPlayer = props.filteredPlayers
  props.setPlayer(newPlayer)
}
// Add team


  return (
          <button onClick={addPlayerHandler} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
