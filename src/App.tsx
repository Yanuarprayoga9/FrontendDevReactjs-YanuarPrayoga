import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/home/Home'));
const Restaurants = React.lazy(() => import('./pages/restaurants/Restaurants'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='py-52 h-screen text-center'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
