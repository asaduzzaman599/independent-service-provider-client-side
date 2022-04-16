import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import { createContext, useState } from 'react';

export const ServiceContext = createContext()

function App() {
  const [services, setServices] = useState([])
  return (
    <div className="App">
      <ServiceContext.Provider value={[services, setServices]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
