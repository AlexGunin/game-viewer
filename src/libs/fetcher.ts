export const fetcher = async (...fetchParams: Parameters<typeof fetch>) => {

  const [input, init = {}] = fetchParams
  try {
    const response = await fetch(input, {
      mode: 'no-cors',
      ...init
    })

    return response.json()
  } catch (err) {
    return Promise.reject(err)
  }
}
