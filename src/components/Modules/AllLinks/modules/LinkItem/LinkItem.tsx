import styles from './LinkItem.module.scss'
import { LinkItemProps } from '../../../../../types'

const LinkItem = (props: LinkItemProps) => {
  const { id, url, short_url, clicks } = props

  return (
    <div className={styles.link}>
      <div>{id}</div>
      <a href={url} target="_blank">
        {url}
      </a>
      <a href={short_url} target="_blank">
        {short_url}
      </a>
      <div className={styles.link_clicks}>{clicks > 99 ? '99+' : Number(clicks)}</div>
    </div>
  )
}

export default LinkItem
