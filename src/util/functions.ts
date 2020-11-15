import { AxiosError } from 'axios'

export const handleAxiosError = (error: AxiosError) => {
  console.log('Axios Error')
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log(error.message)
  }
}

export function isDarkMode() {
  const systemIsDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const config = localStorage.getItem('colorMode')
  return (systemIsDark && config !== 'light') || config === 'dark'
}
