import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import phrases from "../phrases.json"
import QuoteBox from './QuoteBox'

function App() {
  const colors = ["#E59F71", "#BA5A31", "#0C0C0C", "#69DC9E", "#8F8F8F"]  

  const colorRandom = Math.floor(Math.random() * colors.length)
  const randomPhrases = Math.floor(Math.random()* phrases.length)
  const [count, setCount] = useState(randomPhrases)

  const aument = () =>{
    const random2 = Math.floor(Math.random()* phrases.length);
    setCount(random2)
  } 

  const color = colors[colorRandom]

  document.body.style = `background: ${color}`
  const quote = phrases[count].quote
  const author = phrases[count].author



  return (
    <div className="App">
      <div style={{ color: color }}>
            <span><i class="fa-solid fa-quote-left"></i> {quote} <i class="fa-solid fa-quote-right"></i></span>
            <p><i class="fa-solid fa-pen-nib"></i> {author}</p>
            <br />
            <button className='Button' onClick={aument}><i class="fa-solid fa-shuffle"></i></button>
          
        </div>
      
    </div>
  )
}

export default App
