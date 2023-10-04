import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/footer.jsx';
import Home from './components/main/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
