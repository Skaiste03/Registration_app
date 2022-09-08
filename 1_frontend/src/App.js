import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/atoms/Loader';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/StyledTheme';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
