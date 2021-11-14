
import React, { useEffect, useState } from 'react'
import {  addTeam, getApiResource } from '../../../api/teamApi'
import { AddButton } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { Search } from '../../../components/UI/Search/Search'
import { TeamSmallCard } from '../../../components/UI/TeamSmallCard/TeamSmallCard'
import { GET_TEAM_URL } from '../../../core/redux/constants/Teams'
import { ITeamData } from '../../../types/teams'
import classes from './card_team.module.scss'

let cls:any = classes

export const Card_teams: React.FC = () => {
 
  const [team,setTeam] = useState(Array());


  const getResource = async (url:any) => {
    const res = await getApiResource(url);


    const teamList = res.data.map(({name,foundationYear,division,conference,imageUrl,id}:ITeamData) => { 
      return {
        name,
        foundationYear,
        imageUrl,
        id

      }
    })

    setTeam(teamList)
  }
  

  useEffect(() => {
    getResource(GET_TEAM_URL)
  }, [])
  


// Search
  const [value, setValue]=useState("");
  const filteredTeams = team.filter((e:any) => e.name.toLowerCase().includes(value.toLowerCase()))
 

// Search

// Add team
const addTeamHandler = async () =>{
  let testObject = {
    name: "kif",
    foundationYear: 2010,
    division: "3",
    conference: "qwerty",
    imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg"
  }
  let card = await addTeam(testObject)
  filteredTeams.push(card)
  let newTeam = filteredTeams
  setTeam(newTeam)
}
// Add team

  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div>
          <div className={cls.upContainer}>
            <Search
            state={setValue}
            />
            <AddButton
            addTeamHandler={addTeamHandler}
            />
          </div>
          <div className={cls.mainContainer}>
          <ul className={cls.smallCardContainer}>
          {filteredTeams.map(({name,foundationYear,imageUrl,id}) =>
            <TeamSmallCard 
            name={name}
            foundationYear={foundationYear}
            imageUrl={imageUrl}
            id={id}
            />
          )}
          </ul>
          </div>
        </div>
      </div>
  )
}
