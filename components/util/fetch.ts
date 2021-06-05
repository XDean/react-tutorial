export function fetchStatic(url: string) {
  return fetch(url)
    .then(r => {
      if (r.ok) {
        return r.text()
      } else {
        throw r.text()
      }
    })
}