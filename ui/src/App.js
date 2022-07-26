import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [iframeUrl, setIframeUrl] = useState('')

  useEffect(() => {
    if (iframeUrl === '') {
      getEmbedQuestion()
    }
  }, [iframeUrl])

  const getEmbedQuestion = () => {
    fetch('http://localhost:8080/question/1', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        setIframeUrl(data.url)
      })
  }

  return (
    <div>
      <iframe src={iframeUrl} width='1200' height='800' />
    </div>
  )
}

export default App
