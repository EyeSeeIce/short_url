import styles from './MyLinks.module.scss'
import { useAppSelector } from '../../../store/store'
import { LinkItem } from '../AllLinks/modules/LinkItem'

const MyLinks = () => {
  const links = useAppSelector(state => state.link.ownLinks)
  return (
    <div className={styles.myLinks}>
      Мои ссылки
      <div className={styles.myLinks_list}>
        {links.map(i => (
          <LinkItem key={i.id} {...i} />
        ))}
      </div>
    </div>
  )
}

export default MyLinks
