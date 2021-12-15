import { Link } from 'react-router-dom';


import cls from './addButton.module.scss';

export const AddButton = () => {





  return (
          <Link to='/teams/addTeam' className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </Link>

  )
}
