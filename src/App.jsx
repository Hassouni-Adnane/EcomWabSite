import react from 'react'
import Home from './pages/Home.jsx'
import PopupContext from './components/PopupContext.jsx'
import FormBoxLogin from './components/formBoxLogin.jsx'
import { useState } from 'react'
//const { showPopup } = useContext(PopupContext);
function App() {
  
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);}
  
  return (
    <div>
      <Home/>
      <PopupContext.Provider value={{ showPopup, togglePopup }}>
      <FormBoxLogin />
      </PopupContext.Provider>
    </div>
  )
}

export default App
