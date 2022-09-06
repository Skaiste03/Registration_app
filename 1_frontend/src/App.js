import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
