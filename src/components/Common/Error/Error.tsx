import styles from './Error.module.scss'

type Props = {
  message?: string
  showError?: boolean
}

const Error = (props: Props) => {
  const { message = 'Что-то пошло не так', showError = false } = props

  if (showError) {
    return <div className={styles.error}>{message}</div>
  } else {
    return null
  }
}

export default Error
