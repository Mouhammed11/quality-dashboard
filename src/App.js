import React from 'react'
import Plant from './Plant.png'



const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
      <img src = {Plant} alt= "" />
      <h1 style={{
        color: '#6EC177',
        margin: 0
      }}>Plant</h1>
      <p>Video Display of Plants</p>
    </div>
  )
}

export default App
