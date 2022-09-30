import styles from './AllLinks.module.scss'
import { LinkItem } from './modules/LinkItem'
import { useQuery } from '@apollo/client'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { setLinks, setMeta } from '../../../store/slices/linkSlice'
import { getUrlsApolloType } from '../../../types'
import { GET_URLS } from '../../../queries'
import { useSearchParams } from 'react-router-dom'
import { Pagination } from '../Pagination'

const AllLinks = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const dispatch = useAppDispatch()

  const { links, meta } = useAppSelector(state => state.link)

  const { data } = useQuery<getUrlsApolloType>(GET_URLS, {
    variables: {
      page: +page,
    },
  })

  useEffect(() => {
    if (data) {
      dispatch(setLinks({ links: data.short_urls.data }))
      dispatch(setMeta({ meta: data.short_urls.paginatorInfo }))
    }
  }, [data])

  return (
    <div className={styles.allLinks}>
      Список ссылок
      <div className={styles.allLinks_list}>
        {links.map(i => (
          <LinkItem key={i.id} {...i} />
        ))}
      </div>
      <Pagination meta={meta} />
    </div>
  )
}

export default AllLinks
