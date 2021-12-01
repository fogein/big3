
import cls from './Pagination.module.scss'

export const Pagination = (props:any) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalPages / props.PerPage);i++){
    pageNumbers.push(i)
  }


  return (
    <div className={cls.paginationContainer}>

        <ul className={cls.pagination}>
                {
                  pageNumbers.map((number:any) => (
                    <li className={cls.pageItem} key={number}>
                      <button className={cls.pageButton} onClick={() => {props.paginate(number);}} >
                        {number}
                      </button>
                    </li>
                  ))

                }
              </ul>

    </div>

  )
}
