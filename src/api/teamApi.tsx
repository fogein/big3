import { ContentTypes } from "../core/redux/sagas/api";
import { savedToken } from "../core/redux/sagas/auth";



// export const getApiResource = () => {
//   fetch(GET_TEAM,{
//     method: 'GET',
//         headers: new Headers({
//           'Authorization': "Bearer " + savedToken,
//           'Content-Type': ContentTypes.APPLICATION_JSON, 
//         }), 
//   })
//   .then(res => res.json())
//   .then(body => console.log(body))

// }
export const getApiResource = async (url:any) => {


  try {
    const res = await fetch(url,{
      method: 'GET',
        headers: new Headers({
          'Authorization': "Bearer " + savedToken,
          'Content-Type': ContentTypes.APPLICATION_JSON, 
        }),
    });
  
    if (!res.ok) {
      console.error('error', res.status);
      return false
    }
  
      return await res.json();
  
    } catch(error:any){
    console.error("error" , error.message)
    return false
    }
  
  }
