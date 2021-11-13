import React from 'react'
import { addTeam } from '../../../../api/teamApi';
let classes = require('./add_button.module.scss');

let cls:any = classes
export const AddButton: React.FC = () => {
  const addTeamHandler = () =>{
    let testObject = {
      name: "Navi",
      foundationYear: 2010,
      division: "3",
      conference: "qwerty",
      imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg"
    }
    addTeam(testObject)
  }

  return (
          <button onClick={addTeamHandler} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
