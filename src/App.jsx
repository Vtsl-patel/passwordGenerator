import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-=_+{}[]/?`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,65);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='flex flex-wrap justify-center'>
      <h1 className='text-xl text-white text-center p-3 bg-sky-500 rounded-xl m-4 w-full'>Password Generator</h1>
      <div className='w-auto m-5 p-3 bg-gray-700 shadow-md rounded-xl text-orange-500 justify-center'>
      <div className='flex w-full items-center'>
        <input 
          type='text' 
          value={password} 
          className='outline-none flex-grow px-3 py-3 rounded-xl text-md' 
          placeholder='password'
          ref = {passwordRef}
          readOnly
        />
        <button onClick={copyPasswordToClipboard} className='rounded-xl bg-blue-500 text-white m-3 p-3 text-md'>Copy</button>
      </div>
      <div className='flex flex-wrap gap-x-2 mt-3'>
        <input 
          type="range" 
          min={8} 
          max={64} 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          className='cursor-pointer'
        />
        <label>Length: {length}</label>
        <input 
          type="checkbox" 
          defaultChecked={numberAllowed} 
          id="numberInput" 
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor='numberInput'>Numbers</label>
        <input 
          type="checkbox" 
          defaultChecked={charAllowed} 
          id="charInput" 
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor='charInput'>Character</label>
      </div>
    </div>

    </div>
  )
}

export default App
