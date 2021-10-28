import React from 'react'
let classes = require('./add_button.module.scss');

let cls:any = classes
export const AddButton: React.FC = () => {
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
