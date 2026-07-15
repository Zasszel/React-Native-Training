import { useState } from 'react'
import './App.css'
import { InputForm } from './Components/InputForm';
import { InputList } from './Components/InputList';

function App() {

  const [texts, setTexts] = useState<string[]>([
    
  ]);

  function addText(text: string) {
    setTexts([...texts, text]);
  }

  return (
    <>
      <InputForm onSubmit={addText}/>
      <InputList inputs={texts}/>
    </>
  );
    
}

export default App
