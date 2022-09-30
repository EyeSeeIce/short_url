import styles from './Pagination.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'
import cn from 'classnames'
import { Meta } from '../../../types'

type Props = {
  meta: Meta
}
const Pagination = (props: Props) => {
  const { meta } = props
  const [_, setSearchParams] = useSearchParams()

  const pages = new Array(meta?.lastPage || 1).fill('')

  const changePage = useCallback((page: number) => {
    setSearchParams(`page=${page}`)
  }, [])

  const manyItems = pages.length > 10

  return (
    <div className={styles.pagination}>
      {pages.map((_, index) => {
        if (manyItems) {
          if (index + 1 === 1) {
            return (
              <PaginationItem
                key={index + 1}
                index={index + 1}
                changePage={changePage}
                isActive={meta?.currentPage === index + 1}
              />
            )
          }

          if (index + 1 === meta?.lastPage) {
            return (
              <PaginationItem
                key={index + 1}
                index={index + 1}
                changePage={changePage}
                isActive={meta?.currentPage === index + 1}
              />
            )
          }

          if (meta?.currentPage - index + 2 < 1) {
            return null
          }

          if (meta?.currentPage - index + 1 > 4) {
            return null
          }

          return (
            <PaginationItem
              key={index + 1}
              index={index + 1}
              changePage={changePage}
              isActive={meta?.currentPage === index + 1}
            />
          )
        } else {
          return (
            <PaginationItem
              key={index + 1}
              index={index + 1}
              changePage={changePage}
              isActive={meta?.currentPage === index + 1}
            />
          )
        }
      })}
    </div>
  )
}

const PaginationItem = ({
  index,
  changePage,
  isActive,
}: {
  index: number
  changePage: (p: number) => void
  isActive: boolean
}) => {
  const onChangePage = () => {
    changePage(index)
  }
  return (
    <div
      className={cn(styles.pagination_item, {
        [styles.pagination_item_Active]: isActive,
      })}
      onClick={onChangePage}
    >
      {index}
    </div>
  )
}

export default Pagination
