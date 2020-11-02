import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Garden from './components/home/Garden';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Garden />
    </div>
    </BrowserRouter>
  );
}

export default App;
