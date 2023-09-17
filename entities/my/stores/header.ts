export const useMyHeaderStore = defineStore('myHeader', () => {
  const title = ref('')
  const link = reactive({
    to: '',
    text: '',
  })

  function setTitle(_title: string) {
    title.value = _title
    link.to = ''
    link.text = ''
  }

  function setLink(_link: typeof link) {
    link.to = _link.to
    link.text = _link.text
    title.value = ''
  }

  return { title, link, setTitle, setLink }
})
