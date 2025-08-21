import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null)

  function handleRef(){
    const inputText = document.getElementById('inp')

    inputText.focus()
  }
  return (
    <div>
     <input type='text' id='inp'></input>  
     <button onClick={handleRef}>click me</button>

    </div>
  )
}

export default App