import React from 'react'
import cls from './cardPlayer.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link } from 'react-router-dom';
import { IPlayerData } from '../../api/dto/teamsAndPlayers';

export const CardPlayerInfo = (props:IPlayerData) => {

 
  return (
    
      <li key={props.id} className={cls.containerCardTeam}>
        {/* top */}
        <div className={cls.topCardTeam}>
            <div className={cls.aboutCardTeam}>
              <Link className={cls.link} to='/players'>Players </Link>/<span className={cls.link} > {props.name}</span>
            </div> 
            <div className={cls.editCardTeam}>
              <Link to={`/player/edit/${props.id}`}  className={cls.createBut}><img src={create} alt="create" /></Link>
              <button onClick={props.deleteHandler}><img src={deleteimg} alt="delete"  /></button>
            </div>
        </div>
        {/* top end */}

        {/* main */}
      <div className={cls.mainCardTeam}>
          <div className={cls.logoCardTeam}>
            <img className={cls.teamLogo} src={props.avatarUrl} alt="logo" />
          </div>
        <div className={cls.descriptionCardTeam}>
            <div className={cls.nameContainer}>
                <div className={cls.nameCardTeam}>
                        <h2>{props.name} <span className={cls.number}>#{props.number}</span></h2>
                </div>
            </div>
              <div className={cls.infoPlayerContainer}>
                        <div className={cls.position}>
                          <h3>Position</h3>
                          <span className={cls.text}>{props.position}</span>
                        </div>
                        <div className={cls.height}>
                          <h3>Height</h3>
                          <span className='text'>{props.height}</span>
                        </div>
                      <div className={cls.age}>
                        <h3>Age</h3>
                        <span className={cls.text}>{props.birthday}</span>
                    </div>
                    <div className={cls.team}>
                        <h3>Team</h3>
                        <span className={cls.text}>{props.teamName}</span>
                    </div>
                    <div className={cls.weight}>
                        <h3>Weight</h3>
                        <span className={cls.text}>{props.weight}</span>
                    </div>
              </div>
        </div>
      </div>
        {/* main end */}
      </li> 
    
  )
}
