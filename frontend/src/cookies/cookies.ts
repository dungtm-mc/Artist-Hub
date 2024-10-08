const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
}

const getCookie = (name: string): string | undefined => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name))
    ?.split('=')[1]
}

const createLayoutCookie = () => {
  const name = 'layouts'
  const value = {
    ai: true
  }
  const days = 365
  setCookie(name, JSON.stringify(value), days)
}

export { setCookie, getCookie, createLayoutCookie }
