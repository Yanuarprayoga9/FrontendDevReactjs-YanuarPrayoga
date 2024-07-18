import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader';
const Home = React.lazy(() => import('./pages/home/Home'));
const Restaurants = React.lazy(() => import('./pages/restaurants/Restaurants'));
const DetailRestaurants = React.lazy(
  () => import('./pages/detailrestaurant/DetailRestaurant')
);

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Loader/>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<DetailRestaurants />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
