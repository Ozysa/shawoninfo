import React, { useState, useEffect } from 'react'
import './SplashScreen.css'

function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 0.5 seconds (to complete by 1 second)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 500)

    // Remove splash after fade animation completes (1 second total)
    const removeTimer = setTimeout(() => {
      setShow(false)
      onFinish()
    }, 1000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [onFinish])

  if (!show) return null

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <h1 className="splash-name">
          <span className="letter" style={{ '--delay': '0s' }}>S</span>
          <span className="letter" style={{ '--delay': '0.1s' }}>H</span>
          <span className="letter" style={{ '--delay': '0.2s' }}>A</span>
          <span className="letter" style={{ '--delay': '0.3s' }}>W</span>
          <span className="letter" style={{ '--delay': '0.4s' }}>O</span>
          <span className="letter" style={{ '--delay': '0.5s' }}>N</span>
        </h1>
      </div>
    </div>
  )
}

export default SplashScreen

