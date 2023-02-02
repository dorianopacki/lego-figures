import React, { useContext, useState } from 'react';
import './App.scss'
import MiniFifureDraft from './components/MiniFigureDraft'
import CredentialsForm from './components/CredentialsForm'
import { MyContext } from './data/context'


function App() {
  const [state, setState] = useState({});

  return (
    <div className='App'>
      <MyContext.Provider value={{ state, setState }}>
        <CredentialsForm />
        <MiniFifureDraft />
      </MyContext.Provider>
    </div>
  )
}

export default App
