import React, { useEffect } from 'react'
import cls from  './headerUserContainer.module.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../config/env/development';
import { SaveImageApi } from '../../api/request/saveImageApi';
import { changeProfile } from '../../api/request/teamAndPlayersApi';



const style = {
  display:'flex',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  alignItems: 'center',
};


export const HeaderUserContainer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image,setImage]=React.useState(`${BASE_URL}/images/4mniosha.jpg`)
  const  [profileImage,setProfileImage]=React.useState<string | any>(`${BASE_URL}/images/4mniosha.jpg`)
  const  [name,setName]=React.useState<string | any>('')

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = async (data:any) => {
  
    let testObject = {
      userName: data.userName,
      avatarUrl: image
    }
    await changeProfile(testObject)
    localStorage.setItem('name',data.userName);
    localStorage.setItem('avatarUrl',image);
    window.location.reload()
    
  }

  const handleChange = (e:any) => { 
    const image =(e.target.files[0])
    let img = SaveImageApi(image);
      img.then(function(result) {
        setImage(`${BASE_URL}${result}`)
        
    });   
  }

 useEffect(() => {

setName(localStorage.getItem('name'))
  setProfileImage(localStorage.getItem('avatarUrl'))
  
 }, [])
  
  return (
    <>

      <button  onClick={handleOpen} className={cls.linkUser}>
      <span className={cls.userName}>{name}</span>
      <img src={profileImage} alt="Добавьте аватар" className={cls.userProfile} />
      </button>
    
      <Modal
      disableScrollLock
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>

        <button className={cls.addPhotoButton}>
          <div className={cls.imageUpload}>
            
              <label htmlFor="file-input">
                <img  src={image} alt='imageUpload'/>
              </label>
              <input id="file-input" type="file" onChange={handleChange} />
            
          </div>
        </button>

        <form className={cls.inputsContainer} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="userName">UserName</label>
            <input defaultValue={name} className={cls.userNameInput}
              
              {...register("userName", {
                required: "Please write userName",
                minLength: {
                  value: 4,
                  message: "Min length is 4"
                }
              })}
            />
            {errors.userName && <p className={cls.errorMessage}>{errors.userName.message}</p>}
            <button className={cls.saveButton} type="submit" >Save</button>
            </form>
        </Box>
      </Modal>    
    </>           
  )
}
