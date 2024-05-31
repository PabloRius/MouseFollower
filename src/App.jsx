import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(true)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x:clientX, y:clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [ enabled ])

  return (
    <>
      { enabled && 
        <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
      }
      <button
        onClick={() => {setEnabled((prev=>!prev))}}
      >
        {
          enabled 
          ? 'Disable'
          : 'Enable'
        }
        {' Mouse Following'}
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
