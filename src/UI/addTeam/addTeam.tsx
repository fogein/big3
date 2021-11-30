

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { ITeamData } from "../../api/dto/teamsAndPlayers";
import { addTeam } from "../../api/request/teamAndPlayersApi";
import addPhotoTeam from '../../assets/images/addPhotoTeam.svg'
import { saveImage, updateImage } from "../../modules/actions/saveImage";
import { update } from "../../modules/actions/teams";
import cls from './addTeam.module.scss'

export const AddTeam = () => {

  const history=useHistory()
  const dispatch = useDispatch()
  const teams  = useSelector<any, Array<ITeamData>>(state => state.teams )
  const imageUrl = useSelector<any, any>(state => state.imageUrl)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  
  const handleChange = (e:any) => {
    const image =(e.target.files[0])
    dispatch(saveImage(image))
  }
  
  
  const onSubmit = async (data:any) => {
    let testObject = {
      name: data.Name,
      foundationYear: data.YearOfFoundation,
      division: data.Division,
      conference: data.Conference,
      imageUrl: `http://dev.trainee.dex-it.ru${imageUrl}`
    }
    let card = await addTeam(testObject)
    teams.push(card)
    dispatch(update())
    history.push('/teams')
    dispatch(updateImage())
  };  
  return (
      <div className={cls.mainContainer}  >
      <div className={cls.topConttainer}>
    <Link to='/teams' className={cls.tabs} >Teams </Link><span>/</span><Link to="/teams/addTeam" className={cls.tabs}> Add new team</Link>
      </div>
      <div className={cls.contentContainer}>
        <div className={cls.addImageContainer}>
        <button className={cls.addPhotoButton}>
        <img className={cls.imageUploaded} src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt="" />
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
              
              {...register("Name", {
                required: "Please write name",
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.Name && <p className={cls.errorMessage}>{errors.Name.message}</p>}

            <label htmlFor="Division">Division</label>
            <input className={cls.addTeamInput}
              
              {...register("Division", {
                required: "Please write Division",
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Division && <p className={cls.errorMessage}>{errors.Division.message}</p>}

            <label htmlFor="Conference">Conference</label>
            <input className={cls.addTeamInput}
              
              {...register("Conference", {
                required: "Please write Conference",
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.Conference && <p className={cls.errorMessage}>{errors.Conference.message}</p>}

            <label htmlFor="Year of foundation">Year of foundation</label>
            <input className={cls.addTeamInput}
              
              {...register("YearOfFoundation", {
                required: "Please write Year of foundation",
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.YearOfFoundation && <p className={cls.errorMessage}>{errors.YearOfFoundation.message}</p>}
            <div className={cls.buttons}>
            <Link className={cls.cancelButton} to='/teams'>Cancel</Link>
            <button className={cls.saveButton} type="submit" >Save</button>
            </div>
          </form>
      </div>
    </div>
  )
}
