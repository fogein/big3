import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { IPlayerData, ITeamData } from "../../api/dto/teamsAndPlayers";
import { SaveImageApi } from "../../api/request/saveImageApi";
import { addPlayer, getPosition } from "../../api/request/teamAndPlayersApi";
import addPhotoTeam from '../../assets/images/addPhotoTeam.svg'
import { BASE_URL } from "../../config/env/development";
import { MAIN_URL } from "../../modules/teamList/teamsAndPlayersConstants";
import { teamsFetchData } from "../../modules/teamList/teamsSlicer";
import cls from './addPlayer.module.scss'



export const AddPlayer = () => {

  const dispatch = useDispatch()

  const history=useHistory()

  const [image,setImage]=useState('')
  const [position,setPosition]=useState('')

  useEffect(() => {
    dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams?PageSize=${25}&Page=${1}`));
    const position:any =  getPosition()
    position.then(function(res:any){
      setPosition(res)
    })
    
  }, [dispatch]);

  




  const teams  = useSelector<any, any>(state => state.teams )




  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  
  
  const handleChange = (e:any) => {
    const image =(e.target.files[0])
    let img = SaveImageApi(image);
      img.then(function(result) {
        setImage(`${BASE_URL}${result}`)
        
    });   
  }

  
  const onSubmit = async (data:IPlayerData) => {
  
    let testObject = {
      name: data?.name,
      number:data?.number,
      position:data?.position,
      team:data?.team,
      birthday: new Date(data?.birthday).toISOString(),
      height:data?.height,
      weight:data?.weight,
      avatarUrl: image,
    }
    await addPlayer(testObject)
    history.push('/players')
  };  
  return (
      <div className={cls.mainContainer}  >
      <div className={cls.topConttainer}>
    <Link to='/players' className={cls.tabs} >Players </Link><span>/</span><Link to="/players/addPlayer" className={cls.tabs}> Add new player</Link>
      </div>
      <div className={cls.contentContainer}>
        <div className={cls.addImageContainer}>
        <button className={cls.addPhotoButton}>
        <img className={cls.imageUploaded} src={image} alt="" />
          <div className={cls.imageUpload}>
            
              <label htmlFor="file-input">
                <img  src={addPhotoTeam} alt='imageUpload'/>
              </label>
              <input id="file-input" type="file" onChange={handleChange} />
            
          </div>
        </button>
        </div>
              <form className={cls.inputsContainer} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Name">Name</label>
            <input className={cls.addTeamInput}
              
              {...register("name", {
                required: "Please write name",
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.Name && <p className={cls.errorMessage}>{errors.Name.message}</p>}

            <label htmlFor="Position">Position</label>
            <select className={cls.addTeamInput}
              
              {...register("position", {
                required: "Please write Position",
               
              })}
            >
              <option >{position[0]}</option>
              <option >{position[1]}</option>
              <option >{position[2]}</option>
              <option >{position[3]}</option>
              <option >{position[4]}</option>

            </select>
            {errors.Position && <p className={cls.errorMessage}>{errors.Position.message}</p>}

            <label htmlFor="Team">Team</label>
            <select className={cls.addTeamInput}
              
              {...register("team", {
                required: "Please select Team",
                
              })}
            >
              {teams.teams.data?.map(({name,id}:ITeamData) =>
              
                <option value={id}>{name}</option>
              )}
              
            </select>
            {errors.Team && <p className={cls.errorMessage}>{errors.Team.message}</p>}

<div className={cls.twoInputs}>

              <label htmlFor="Height">Height (cm)</label>
            <input className={cls.addTeamInputWH}
              
              {...register("height", {
                required: "Please write Height",
               
              })}
            />
            {errors.Height && <p className={cls.errorMessage}>{errors.Height.message}</p>}

            <label htmlFor="Birthday">Birthday</label>
            <input type='date' className={cls.addTeamInputWH}
              
              {...register("birthday", {
                required: "Please write Birthday",
                
              })}
            />
            {errors.Birthday && <p className={cls.errorMessage}>{errors.Birthday.message}</p>}
            
              <label className={cls.labelML} htmlFor="Weight">Weight (kg)</label>
            <input className={cls.addTeamInputWHML}
              
              {...register("weight", {
                required: "Please write Weight",
                
              })}
            />
            {errors.Weight && <p className={cls.errorMessage}>{errors.Weight.message}</p>}

            <label className={cls.labelML} htmlFor="Number">Number</label>
            <input className={cls.addTeamInputWHML}
              
              {...register("number", {
                required: "Please write Number",
                minLength: {
                  value: 1,
                  message: "Min length is 1"
                }
              })}
            />
            {errors.Number && <p className={cls.errorMessage}>{errors.Number.message}</p>}
            </div>
           
            <div className={cls.buttons}>
            <Link className={cls.cancelButton} to='/teams'>Cancel</Link>
            <button className={cls.saveButton} type="submit" >Save</button>
            </div>
          </form>
      </div>
    </div>
  )
}
