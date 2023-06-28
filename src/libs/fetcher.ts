export const fetcher = async (...fetchParams: Parameters<typeof fetch>) => {

  const [input, init = {}] = fetchParams
  console.log('FETCHER', input, init)
  try {
    const response = await fetch(input, {
      mode: 'no-cors',
      ...init
    })
    const result = await response.text()
    console.log('result', result)
    return result
  } catch (err) {
    console.log('ERROR', err)
    return Promise.reject(err)
  }
}
