import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [password, setPassword] = useState('')
  const [NumbersAllowed, setIncludeNumbers] = useState(false)
  const [SymbolsAllowed, setIncludeSymbols] = useState(false)

  // useRef
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv"

    if (NumbersAllowed) strings += "0123456789"
    if (SymbolsAllowed) strings += "!@?#$%&*/."

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strings.length + 1)
      pass += strings.charAt(char)

      setPassword(pass)
    }

  }, [length, SymbolsAllowed, NumbersAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[SymbolsAllowed, length, NumbersAllowed, passwordGenerator])

  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gray-700'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-green-400'>
        <h1 className='text-cyan-950 text-center text-3xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} />
          <button onClick={copyToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={10}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={setIncludeNumbers}
            id="IncludeNumbers"
            onChange={() => {
              setIncludeNumbers((prev) => !prev);
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={setIncludeSymbols}
            id="IncludeSymbols"
            onChange={() => {
              setIncludeSymbols((prev) => !prev);
            }} />
            <label>Symbols</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
