import { Link } from 'react-router-dom';


import cls from './addButton.module.scss';
interface IButtonProps{
link:string
}
export const AddButton = (props:IButtonProps) => {





  return (
          <Link to={props.link} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </Link>

  )
}
