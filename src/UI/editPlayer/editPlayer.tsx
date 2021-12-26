import { useState } from 'react'
import cls from './editPlayer.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  updatePlayer } from '../../api/request/teamAndPlayersApi';
import { IPlayerData } from '../../api/dto/teamsAndPlayers';
import { SaveImageApi } from '../../api/request/saveImageApi';
import { BASE_URL } from '../../config/env/development';



export const EditPlayer = (props:IPlayerData) => {
  const history = useHistory()
  const [image,setImage]=useState(props.avatarUrl)


  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });

  
  

  const handleChange = async (e:any) => {
    
      const image =(e.target.files[0])
        let img = SaveImageApi(image);
      img.then(function(result) {
        setImage(`${BASE_URL}${result}`)
        
    });   
  }



  const onSubmit = async (data:IPlayerData) => {
    console.log(data);
    
    let testObject = {
      name: data.name,
      number:data.number,
      position:data.position,
      team:data.team,
      birthday:data.birthday,
      height:data.height,
      weight:data.weight,
      avatarUrl: image,
      id:props.id
    }
    await updatePlayer(testObject)
    history.push('/players')
  }; 
  

  return (
    
      <li key={props.id} className={cls.containerCardTeam}>
        {/* top */}
        <div className={cls.topCardTeam}>
            <div className={cls.aboutCardTeam}>
              <Link className={cls.link} to='/players'>Players </Link>/<Link to={`/player/${props.id}`}   className={cls.link} > {props.name}</Link>
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
          <div className={cls.imageUpload}>
            
              <label htmlFor="file-input">
                <img className={cls.image} src={image}  alt=''/>
              </label>
              <input  id="file-input" type="file"  onChange={handleChange} />
            
          </div>
        </button>
            </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className={cls.descriptionCardTeam}>
            <div className={cls.nameContainer}>
                
            <label className={cls.nameTitle} htmlFor="Name">Name</label>
            <input defaultValue={props.name} className={cls.nameCardTeam}
              
              {...register("name", {
               
              })}
            />
            {errors.Name && <p className={cls.errorMessageName}>{errors.Name.message}</p>}

            <label className={cls.numberTitle} htmlFor="Number">Number#</label>
            <input defaultValue={props.number} className={cls.numberCardTeam}
              
              {...register("number", {
                
              })}
            />
            {errors.Number && <p className={cls.errorMessageNumber}>{errors.Number.message}</p>}

            </div>
                    <div className={cls.infoPlayerContainer}>
                      <label className={cls.positionTitle} htmlFor="Position">Position</label>
              <input defaultValue={props.position} className={cls.positionCardTeam}
                
                {...register("position", {
                 
                })}
              />
              {errors.Position && <p className={cls.errorMessagePosition}>{errors.Position.message}</p>}

              <label className={cls.heightTitle} htmlFor="Height">Height</label>
              <input defaultValue={props.height} className={cls.heightCardTeam}
                
                {...register("height", {
                 
                })}
              />
              {errors.Height && <p className={cls.errorMessageHeight}>{errors.Height.message}</p>}

              <label className={cls.ageTitle} htmlFor="Age">Age</label>
              <input defaultValue={props.birthday} className={cls.ageCardTeam}
                
                {...register("age", {
                  
                })}
              />
              {errors.Age && <p className={cls.errorMessageAge}>{errors.Age.message}</p>}

              <label className={cls.teamTitle} htmlFor="Team">Team</label>
              <input defaultValue={props.team} className={cls.teamCardTeam}
                
                {...register("team", {
                  
                })}
              />
              {errors.Team && <p className={cls.errorMessageTeam}>{errors.Team.message}</p>}

              <label className={cls.weightTitle} htmlFor="Weight">Weight</label>
              <input defaultValue={props.weight} className={cls.weightCardTeam}
                
                {...register("weight", {
                  
                })}
              />
              {errors.Weight && <p className={cls.errorMessageWeight}>{errors.Weight.message}</p>}

              <button className={cls.saveButton} type="submit" >Save</button>
            </div>
           

           
        </div>
      </form>
      </div>
        {/* main end */}
      </li>
    
  )
}
