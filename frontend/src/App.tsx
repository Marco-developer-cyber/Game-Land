
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import MainMenu from './MainMenu'
// import GameDetails from './Pages/GameDetails'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        {/* <Route path="/game/:id" element={<GameDetails />} /> */}
        {/* <Route path="/top" element={<TopGames />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
