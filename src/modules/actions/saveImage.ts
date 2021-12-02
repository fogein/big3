import axios from "axios";



export function updateImage () {
  
  return { 
    type: "UPDATE_IMAGE",

  }
}

export function saveImageSuccess(data:any) {
  return {
      type: "SAVE_IMAGE",
      data
  }
}

export function saveImage(file:string) {
  const formData = new FormData(); 
  formData.append("file",file );
  return (dispatch:any) => {
    axios.post('http://dev.trainee.dex-it.ru/api/Image/SaveImage', formData, {
      headers: {
          'file':'@emptyPlayers.jpg',
          'Authorization': "Bearer " + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
      },
    })
              .then(response => {
                if(!response) {
                    throw new Error(response);
                }
                return response;
            })
            .then(response => response)
            .then(data => dispatch(saveImageSuccess(data)))
            .catch(()=>{});
                      
  }
}




