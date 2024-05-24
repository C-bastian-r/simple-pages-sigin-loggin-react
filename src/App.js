import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { SingIn } from './pages/SigIn';
import { Loggin } from './pages/Loggin';
import { Home } from './pages/Home';
import { tokenComprobation } from './utils/tokenComprobation';
import { useEffect, useState } from 'react';

function App() {

  const [tokenValid, setTokenValid] = useState(true);

  useEffect(()=>{
    const interval = setInterval(()=>{
      const isValid = tokenComprobation();
      setTokenValid(isValid);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' Component={Loggin}/>
        <Route path='/loggin' Component={Loggin}/>
        <Route path='/sigin' Component={SingIn}/>
        <Route path='/home' element={tokenValid ? <Home/>:<Navigate to='/loggin'/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
