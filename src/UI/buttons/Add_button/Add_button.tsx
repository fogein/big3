import { addTeam } from '../../../api/request/teamAndPlayersApi'; 

import cls from './add_button.module.scss';

export const AddButton = (props:any) => {





  return (
          <button onClick={props.handler} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
