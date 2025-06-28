
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import MainMenu from './MainMenu'
import GameDetails from './Pages/GameDetails'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import ForgotPassword from './Pages/ForgotPassword'
import TermsOfService from './Pages/TermsOfService'
import Genres from './Pages/Genres'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path='/genres' element={<Genres />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/terms' element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/top" element={<TopGames />} />
        <Route path="/genres" element={<Genres />} /> */}
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
