import { useEffect, useState } from 'react'
import cls from './editPlayer.module.scss'
import create from '../../assets/images/create.svg';
import deleteimg from '../../assets/images/delete.svg';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  getPosition, updatePlayer } from '../../api/request/teamAndPlayersApi';
import { IPlayerData, ITeamData } from '../../api/dto/teamsAndPlayers';
import { SaveImageApi } from '../../api/request/saveImageApi';
import { BASE_URL } from '../../config/env/development';
import { useDispatch, useSelector } from 'react-redux';
import { teamsFetchData } from '../../modules/teamList/teamsSlicer';
import { MAIN_URL } from '../../modules/teamList/teamsAndPlayersConstants';



export const EditPlayer = (props:IPlayerData) => {
  const history = useHistory()
  const [image,setImage]=useState(props.avatarUrl)
  const [position,setPosition]=useState([])
  const[date,setDate]=useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams?PageSize=${25}&Page=${1}`));
    const position:any =  getPosition()
    position.then(function(res:any){
      setPosition(res)
    })

    let curr = new Date(props.birthday);
    curr.setDate(curr.getDate() + 1);
    setDate(curr.toISOString().substr(0,10))
    
  }, [dispatch, props.birthday]);


  const teams  = useSelector<any, any>(state => state.teams )

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
    let testObject = {
      name: data?.name,
      number:data?.number,
      position:data?.position,
      team:data?.team,
      birthday:new Date(date).toISOString(),
      height:data?.height,
      weight:data?.weight,
      avatarUrl: image,
      id:props.id
    }
    await updatePlayer(testObject)
    history.push('/players')
  }; 
  const onChangeData = (date:any) => {
setDate(date)

  }

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
              <select  className={cls.positionCardTeam}
                
                {...register("position", {
                 
                })}
              >
                <option value={props.position} selected disabled hidden>{props.position}</option>
                {position.map(n => (
            
               <option value={n}  className={cls.option} >{n}</option>
            
          ))}        
              </select>
              {errors.Position && <p className={cls.errorMessagePosition}>{errors.Position.message}</p>}

              <label className={cls.heightTitle} htmlFor="Height">Height</label>
              <input defaultValue={props.height} className={cls.heightCardTeam}
                
                {...register("height", {
                 
                })}
              />
              {errors.Height && <p className={cls.errorMessageHeight}>{errors.Height.message}</p>}

              <label className={cls.ageTitle} htmlFor="Age">Age</label>
              <input type='date' value={date}  className={cls.ageCardTeam}
                onChange={(data)=>{
                  let date = data.target.value
                  onChangeData(date)
                }}
              />
              {errors.Age && <p className={cls.errorMessageAge}>{errors.Age.message}</p>}
              

              <label className={cls.teamTitle} htmlFor="Team">Team</label>
              <select defaultValue={props.team} className={cls.teamCardTeam}
                
                {...register("team", {
                  
                })}
              >
                <option value={props.team} selected disabled hidden>{props.teamName}</option>
                 {teams.teams.data?.map(({name,id}:ITeamData) =>
              
              <option className={cls.option} value={id}>{name}</option>
            )}
              </select>
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
