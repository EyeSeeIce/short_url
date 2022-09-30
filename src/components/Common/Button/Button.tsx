import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

type OwnProps = {}

type Props = OwnProps & ButtonHTMLAttributes<Omit<HTMLButtonElement, keyof OwnProps>>

const Button: FC<Props> = (props) => {
  const { children } = props
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
