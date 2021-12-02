import React from 'react'
import cls from './EditTeam.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateTeam } from '../../api/request/teamAndPlayersApi';
import { update } from '../../modules/actions/teams';
import { useDispatch, useSelector } from 'react-redux';
import { saveImage, updateImage } from '../../modules/actions/saveImage';
import { ITeamData } from '../../api/dto/teamsAndPlayers';



export const EditTeam = (props:ITeamData) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  
 let  imageProps =props.imageUrl
  const imageUrl = useSelector<any, string>(state => state.imageUrl)
  

  

  const handleChange = async (e:any) => {
    
      const image =(e.target.files[0])
      dispatch(saveImage(image))
      
  }

  if (!!imageUrl)
  {
    imageProps=imageUrl;
  }
  



  
  const onSubmit = async (data:any) => {
    let editTeam = {
    name: data.Name,
    foundationYear: data.YearOfFoundation,
    division: data.Division,
    conference: data.Conference,
    id:props.id,
    imageUrl:imageProps
  
    
    }
    updateTeam(editTeam);
    dispatch(update())
    dispatch(updateImage())
    setTimeout(() => {
      history.push('/teams')
    }, 100);
    
    
  }
  

  return (
    
      <li key={props.id} className={cls.containerCardTeam}>
        {/* top */}
        <div className={cls.topCardTeam}>
            <div className={cls.aboutCardTeam}>
              <Link className={cls.link} to='/teams'>Teams </Link>/<Link to={`/team/${props.id}`}   className={cls.link} > Denver Nuggets</Link>
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
        <button className={cls.addPhotoButton}>
          <img className={cls.imageUploaded} src={props.imageUrl} alt="" />
          <div className={cls.imageUpload}>
            
              <label htmlFor="file-input">
                <img className={cls.image} src={imageProps}  alt=''/>
              </label>
              <input  id="file-input" type="file"  onChange={handleChange} />
            
          </div>
        </button>
            </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className={cls.descriptionCardTeam}>
              
              <label className={cls.nameTitle} htmlFor="Name">Name</label>
            <input defaultValue={props.name} className={cls.nameCardTeam}
              
              {...register("Name", {
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.Name && <p className={cls.errorMessageName}>{errors.Name.message}</p>}

            <label className={cls.foundationYearTitle} htmlFor="Year of foundation">Year of foundation</label>
            <input defaultValue={props.foundationYear} className={cls.foundationCardTeam}
              
              {...register("YearOfFoundation", {
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.YearOfFoundation && <p className={cls.errorMessageYear}>{errors.YearOfFoundation.message}</p>}

            <label className={cls.conferenceTitle} htmlFor="Conference">Conference</label>
            <input defaultValue={props.conference} className={cls.conferenceCardTeam}
              
              {...register("Conference", {
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Conference && <p className={cls.errorMessageConference}>{errors.Conference.message}</p>}

            <label className={cls.divisionTitle} htmlFor="Division">Division</label>
            <input defaultValue={props.division} className={cls.divisionCardTeam}
              
              {...register("Division", {
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Division && <p className={cls.errorMessageDivision}>{errors.Division.message}</p>}

            <button className={cls.saveButton} type="submit" >Save</button>
        </div>
      </form>
      </div>
        {/* main end */}
      </li>
    
  )
}
