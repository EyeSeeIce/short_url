export const stringIsEmpty = (str: string) => !str.length

export const stringIsUrl = (str: string) => {
  const res = str.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  )
  return !!res
}
