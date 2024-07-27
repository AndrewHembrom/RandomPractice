import { useState } from 'react'

function App() {

  return (
    <div style={{display: "flex"}}>
      <CardWrapper>
        Some text
      </CardWrapper>
      <CardWrapper>
        <div>
          some more text
        </div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: 20, margin: 20 }}>
      {children}
    </div>
  )
}

export default App
