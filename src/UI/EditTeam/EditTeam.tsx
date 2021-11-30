import React from 'react'
import cls from './EditTeam.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const EditTeam = (props:any) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });



  const onSubmit = async (data:any) => {
    let editTeam = {
    name: data.Name,
    foundationYear: data.YearOfFoundation,
    division: data.Division,
    conference: data.Conference,
    // imageUrl: `http://dev.trainee.dex-it.ru${imageUrl}`
    }
    console.log(editTeam);
    
 
  }
  

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
      <form onSubmit={handleSubmit(onSubmit)} className={cls.mainCardTeam}>
          <div className={cls.logoCardTeam}>
            <img className={cls.teamLogo} src={props.imageUrl} alt="logo" />
          </div>
        <div className={cls.descriptionCardTeam}>
              
              <label htmlFor="Name">Name:{props.name}</label>
            <input defaultValue={props.name} className={cls.nameCardTeam}
              
              {...register("Name", {
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.Name && <p className={cls.errorMessage}>{errors.Name.message}</p>}

            <label htmlFor="Year of foundation">Year of foundation:{props.foundationYear}</label>
            <input defaultValue={props.foundationYear} className={cls.foundationCardTeam}
              
              {...register("YearOfFoundation", {
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.YearOfFoundation && <p className={cls.errorMessage}>{errors.YearOfFoundation.message}</p>}

            <label htmlFor="Conference">Conference:{props.conference}</label>
            <input defaultValue={props.conference} className={cls.conferenceCardTeam}
              
              {...register("Conference", {
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Conference && <p className={cls.errorMessage}>{errors.Conference.message}</p>}

            <label htmlFor="Division">Division:{props.division}</label>
            <input defaultValue={props.division} className={cls.divisionCardTeam}
              
              {...register("Division", {
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Division && <p className={cls.errorMessage}>{errors.Division.message}</p>}

            <button className={cls.saveButton} type="submit" >Save</button>

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
      </form>
        {/* main end */}
      </li>
    
  )
}
