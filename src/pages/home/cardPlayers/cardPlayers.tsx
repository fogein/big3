/* eslint-disable @typescript-eslint/no-array-constructor */
import React from 'react'
import { AddButton } from '../../../UI/buttons/Add_button/Add_button'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { Search } from '../../../UI/Search/Search'
import cls from './cardPlayers.module.scss'



export const CardPlayers: React.FC = () => {
 
//     const [player,setPlayer] = useState(Array());
//     const [currentPage,setCurrentPage] = useState(1)
//     const [playerPerPage] = useState(6)
  
//     // const getResource = async (url:any) => {
//     //   const res = await getApiResource(url);
  
  
//     //   const playerList = res.data.map(({name,position,birthday,height,weight,avatarUrl,team,number,id}:IPlayerData) => { 
//     //     return {
//     //       name,
//     //       team,
//     //       number,
//     //       avatarUrl,
//     //       id,
//     //       position,
//     //       birthday,
//     //       height,
//     //       weight
  
//     //     }
//     //   })
  
//     //   setPlayer(playerList)
//     // }
    
  
//     // useEffect(() => {
//     //   getResource(GET_PLAYER_URL)
//     // }, [])
    

  
//   // Search
//     const [value, setValue]=useState("");
//     const filteredPlayers = player.filter((e:any) => e.name.toLowerCase().includes(value.toLowerCase()))
   
  
//   // Search

//     // Add player
// const addPlayerHandler = async () =>{
//   let testObject = {
//     name: "player",
//     team: "navi",
//     number: "3",
//     imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg",
//     position:"forward",
//     birthday:"10-10-2010",
//     height:220,
//     weight:100
//   }
//   let card = await addPlayer(testObject)
//   filteredPlayers.push(card)
//   let newPlayer = filteredPlayers
//   setPlayer(newPlayer)
// }
// // Add player
  
//   // Pagination
  
//   const lastPlayerIndex = currentPage*playerPerPage
//   const firstPlayerIndex = lastPlayerIndex-playerPerPage
//   const currentPlayers = filteredPlayers.slice(firstPlayerIndex, lastPlayerIndex)
  
//   const paginate = (pageNumber:any) => setCurrentPage(pageNumber)
  
  
//   // Pagination
  
  
    return (
  
        <div className={cls.bg}>
          <Header/>
          <Navbar/>
          <div>
            <div className={cls.upContainer}>
              <Search 
              PageSize={0}            
              />
              <AddButton
              
              />
            </div>
            <div className={cls.mainContainer}>
           PlayerPage
            </div>
           
          </div>
          
        </div>
    )
  
    }
