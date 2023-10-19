import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main.tsx';
import Feedback from '../Feedback/Feedback.tsx';
import Settings from '../Settings/Settings.tsx';
import Footer from '../Footer/Footer.tsx'
import Menu from '../Menu/Menu.tsx'
import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen">

      <Menu />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
