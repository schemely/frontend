interface MyHeader {
  title: string
  link?: {
    to: string
    text: string
  } | null
}

export const useMyHeader = () => {
  return useState(
    'myHeader',
    (): MyHeader => ({
      title: '',
      link: null,
    })
  )
}
