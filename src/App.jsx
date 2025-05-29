import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [inputText, setInputText] = useState("");
  const [word, setWord] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };


  useEffect(() => {
    
    function finder() {
      const spiltWords = inputText.split(" ");
      for (const words of spiltWords) {
        if (customDictionary[words]) {
          setWord(customDictionary[words]);
          break;
        } else {
          setWord("");
          continue;
        }
      }
    }
    finder();
  }, [inputText])

  return (
    <div>
      <textarea name="words" id="words" placeholder='Enter text...' value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
      {word && <p style={{ marginTop: 20, fontWeight: 400 }}>Did you mean: <strong>{word}</strong>? </p>}
    </div>
  )
}

export default App
