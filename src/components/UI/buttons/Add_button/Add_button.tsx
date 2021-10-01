import React from 'react'
import './add_button.scss'

export const Add_button: React.FC = () => {
  return (
    <>
      <div className="container__add_but">
          <button className="add__button">
            <span className="add__button-text">Add +</span>
          </button>
        </div>
    </>
  )
}
