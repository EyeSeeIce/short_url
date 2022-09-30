import styles from './Input.module.scss'
import { forwardRef, InputHTMLAttributes } from 'react'

type OwnProps = {
  label?: string
}

type Props = OwnProps & InputHTMLAttributes<Omit<HTMLInputElement, keyof OwnProps>>

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label } = props
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={styles.input} type="text" ref={ref} {...props} />
    </div>
  )
})

export default Input
