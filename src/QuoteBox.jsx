import React from 'react';
import phrases from "../phrases.json"
import App from "./App"


const QuoteBox = () => {
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
        <div>
            <span><i class="fa-solid fa-quote-left"></i>{quote}<i class="fa-solid fa-quote-right"></i></span>
            <p><i class="fa-solid fa-pen-nib"></i>{author}</p>
            <br />
            <button onClick={aument}><i class="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default QuoteBox;