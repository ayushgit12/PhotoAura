

import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import MainPage from './MainPage.jsx';
import Result from './Result.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/mainpage' element={<MainPage />} />
      <Route path='/result' element={<Result />} />
      </Routes>
    </>
  )
}

export default App
