import { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.ok ? r.text() : Promise.reject('Error'))
      .then(setMessage)
      .catch(() => setMessage('Failed to reach API'))
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui', margin: '3rem', textAlign: 'center' }}>
      <h1>Azure Static Web App + .NET 8 API</h1>
      <p>API says: <strong>{message}</strong></p>
    </div>
  )
}
