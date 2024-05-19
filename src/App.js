import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavigatonBar from './components/NavigationBar';
//import { About } from './components/About';
//import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <NavigatonBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;