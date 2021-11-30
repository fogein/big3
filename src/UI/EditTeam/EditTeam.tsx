import React from 'react'
import cls from './EditTeam.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link } from 'react-router-dom';

export const EditTeam = (props:any) => {


  return (
    
      <li key={props.id} className={cls.containerCardTeam}>
        {/* top */}
        <div className={cls.topCardTeam}>
            <div className={cls.aboutCardTeam}>
              <Link className={cls.link} to='/teams'>Teams </Link>/<span className={cls.link} > Denver Nuggets</span>
            </div>
            <div className={cls.editCardTeam}>
              <button className={cls.createBut}><img src={create} alt="create" /></button>
              <button onClick={props.deleteHandler}><img src={deleteimg} alt="delete"  /></button>
            </div>
        </div>
        {/* top end */}

        {/* main */}
      <div className={cls.mainCardTeam}>
          <div className={cls.logoCardTeam}>
            <img className={cls.teamLogo} src={props.imageUrl} alt="logo" />
          </div>
        <div className={cls.descriptionCardTeam}>
          edit team {props.id}
              {/* <div className={cls.nameCardTeam}>
                <h2>{props.name}</h2>
              </div>
              <div className={cls.foundationCardTeam}>
                <h3>Year of foundation</h3>
                <span className={cls.text}>{props.foundationYear}</span>
              </div>
              <div className={cls.conferenceCardTeam}>
                <h3>Conference</h3>
                <span className='text'>{props.conference}</span>
              </div>
            <div className={cls.divisionCardTeam}>
              <h3>Division</h3>
              <span className={cls.text}>{props.division}</span>
          </div> */}
        </div>
      </div>
        {/* main end */}
      </li>
    
  )
}
