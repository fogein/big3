
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import addPhotoTeam from '../../assets/images/addPhotoTeam.svg'
import cls from './addTeam.module.scss'

export const AddTeam = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data:any) => {
    console.log(data);
  };
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
              <form className={cls.inputsContainer} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="Bill"
              {...register("firstName", {
                required: "this is a required",
                maxLength: {
                  value: 2,
                  message: "Max length is 2"
                }
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Luo"
              {...register("lastName", {
                required: "this is required",
                minLength: {
                  value: 2,
                  message: "Min length is 2"
                }
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <label htmlFor="email">Email</label>
            <input
              placeholder="bluebill1049@hotmail.com"
              type="text"
              {...register("email", {
                required: "this is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input type="submit" />
          </form>
      </div>
    </div>
  )
}
