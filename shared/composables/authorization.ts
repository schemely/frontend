export const useAuthorization = () => {
  const token = useCookie('auth:token')
  const authorization = computed(() => (token.value ? `Bearer ${token.value}` : ''))

  return { authorization: authorization.value, token }
}
