import React from 'react'
import { IPlayerData } from '../../api/dto/teamsAndPlayers'

import cls from './table.module.scss'

export const TableItem = (props:IPlayerData) => {
  return (
        <tr className={cls.bodyTable}>
            {/* col-1 */}
            <td className={cls.bodyTableItem}>{props.number}</td>
            <td className={cls.bodyTableItem}><div className={cls.playerBlock}>
              <img className={cls.tableImg} src={props.avatarUrl} alt="player_img"/> <span>{props.name} <p>{props.position}</p></span></div>
            </td>
            <td className={cls.bodyTableItem}>{props.height}cm</td>
            <td className={cls.bodyTableItem}>{props.weight}kg</td>
            <td className={cls.bodyTableItem}>21</td>
            {/* col-1 end*/}

            </tr>
  )
}
