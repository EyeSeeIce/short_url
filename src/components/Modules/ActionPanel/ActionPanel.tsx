import styles from './ActionPanel.module.scss'
import { Input } from '../../Common/Input'
import { Button } from '../../Common/Button'
import { FormEvent, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_URL, GET_URLS } from '../../../queries'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../../../store/store'
import { setOwnLinks } from '../../../store/slices/linkSlice'
import { Error } from '../../Common/Error'
import { stringIsEmpty, stringIsUrl } from '../../../utils/helpers'

const ActionPanel = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const [createUrl, { loading }] = useMutation(CREATE_URL, {
    refetchQueries: [{ query: GET_URLS, variables: { page: +page } }],
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const value = inputRef.current?.value || ''

    if (stringIsEmpty(value)) {
      return setErrorMessage('Введите ссылку')
    }

    if (!stringIsUrl(value)) {
      return setErrorMessage('Значение должно быть ссылкой')
    }

    setErrorMessage('')
    if (inputRef.current?.value) {
      createUrl({
        variables: {
          url: inputRef.current?.value,
        },
      })
        .then(data => {
          dispatch(setOwnLinks({ link: data.data.shorten_url.short_url }))
          if (inputRef.current?.value) {
            inputRef.current.value = ''
          }
        })
        .catch(() => {
          setErrorMessage('Что-то пошло не так')
        })
    }
  }

  return (
    <div className={styles.actionPanel}>
      Введите ссылку
      <form className={styles.actionPanel_form} onSubmit={handleSubmit}>
        <Input ref={inputRef} disabled={loading} />
        <Button type="submit" disabled={loading}>
          Сократить
        </Button>
      </form>
      <Error message={errorMessage} showError={!!errorMessage} />
    </div>
  )
}

export default ActionPanel
