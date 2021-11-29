import React from 'react'
import create from '../../assets/create.svg'
import del from '../../assets/delete.svg'
import por from '../../assets/POR 1.svg'

export const CardTeam: React.FC = () => {
  return (
    <>
      <section className="container__cardTeam">
        {/* top */}
        <div className="top__cardTeam">
            <div className="about__cardTeam">
              <span>Teams <span>/</span> Denver Nuggets</span>
            </div>
            <div className="edit__cardTeam">
              <button><img src={create} alt="create" /></button>
              <button><img src={del} alt="delete"  /></button>
            </div>
        </div>
        {/* top end */}

        {/* main */}
        <div className="main__cardTeam">
          <div className="logo__cardTeam">
            <img src={por} alt="logo" />
          </div>
          <div className="description__cardTeam">
              <div className="name__cardTeam">
                <h2>Denver Nuggets</h2>
              </div>
              <div className="foundation__cardTeam">
                <h3>Year of foundation</h3>
                <span className='text'>1976</span>
              </div>
              <div className="conference__cardTeam">
                <h3>Conferece</h3>
                <span className='text'>Western</span>
              </div>
            </div>
            <div className="division__cardTeam">
              <h3>Division</h3>
              <span className='text'>Northwestern</span>
          </div>
        </div>
        {/* main end */}
      </section>
    </>
  )
}
