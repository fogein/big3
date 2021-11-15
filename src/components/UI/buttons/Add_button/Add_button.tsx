import { addTeam } from "../../../../api/teamApi";

import cls from './add_button.module.scss';

export const AddButton = (props:any) => {


// Add team
const addTeamHandler = async () =>{
  let testObject = {
    name: "kifer",
    foundationYear: 2010,
    division: "3",
    conference: "qwerty",
    imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg"
  }
  let card = await addTeam(testObject)
  props.filteredTeams.push(card)
  let newTeam = props.filteredTeams
  props.setTeam(newTeam)
}
// Add team


  return (
          <button onClick={addTeamHandler} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
