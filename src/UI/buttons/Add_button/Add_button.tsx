import { Link } from 'react-router-dom';


import cls from './add_button.module.scss';

export const AddButton = (props:any) => {





  return (
          <Link to='/team/addTeam' className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </Link>

  )
}
