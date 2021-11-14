let classes = require('./add_button.module.scss');

let cls:any = classes
export const AddButton = (props:any) => {



  return (
          <button onClick={props.addTeamHandler} className={cls.addButton}>
            <span className={cls.addButtonText}>Add +</span>
          </button>

  )
}
