import React from 'react'
import classes from  './add_button.module.scss'

let cls:any = classes
export const Add_button: React.FC = () => {
  return (
    <>
      <div className={cls.containerAddBut}>
          <button className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>
        </div>
    </>
  )
}
