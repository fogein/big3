import React from 'react'
import { postTeam } from '../../../../api/teamApi';
let classes = require('./add_button.module.scss');

let cls:any = classes
export const AddButton: React.FC = () => {
  return (
          <button onClick={postTeam} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
