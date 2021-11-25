
import { Link } from 'react-router-dom'
import addPhotoTeam from '../../assets/images/addPhotoTeam.svg'
import cls from './addTeam.module.scss'

export const AddTeam = () => {
  return (
      <div className={cls.mainContainer}  >
      <div className={cls.topConttainer}>
    <Link to='/team' className={cls.tabs} >Teams </Link><span>/</span><a className={cls.tabs} href="/"> Add new team</a>
      </div>
      <div className={cls.contentContainer}>
        <div className={cls.addImageContainer}>
        <button className={cls.addPhotoButton}>
          <img src={addPhotoTeam} alt="" />
        </button>
        </div>
        <form className={cls.inputsContainer}>
          <input className={cls.addTeamInput} type="text" />
          <input className={cls.addTeamInput} type="text" />
          <input className={cls.addTeamInput} type="text" />
          <input className={cls.addTeamInput} type="text" />
        </form>
      </div>
    </div>
  )
}
