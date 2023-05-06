import React, { useState } from 'react'
import PopupContext from './components/PopupContext.jsx'
import Home from './pages/Home.jsx'
import FormBoxLogin from './components/FormBoxLogin.jsx'

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  }
  
  return (
    <div>
      <PopupContext.Provider value={{ showPopup, togglePopup }}>
        <Home />
        <FormBoxLogin />
      </PopupContext.Provider>
    </div>
  )
}

export default App
