export async function create<T>(this: { urls: { create: string } }, payload: any): Promise<T> {
  const runtimeConfig = useRuntimeConfig()
  const { authorization } = useAuthorization()

  return await $fetch(this.urls.create, {
    baseURL: runtimeConfig.public.baseUrl,
    method: 'POST',
    body: unref(payload),
    headers: {
      authorization,
    },
  })
}
