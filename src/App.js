import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './composant/SearchPage/searchpage';
import FaqPage from './composant/Faq/faq'
import Navigation from './composant/Navigation/navigation';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/faq" element={<FaqPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App