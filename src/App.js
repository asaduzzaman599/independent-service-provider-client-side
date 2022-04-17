import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import { createContext, useState } from 'react';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequiredAuth from './Pages/Auth/RequiredAuth/RequiredAuth';

export const ServiceContext = createContext()

function App() {
  const [services, setServices] = useState([])
  return (
      <ServiceContext.Provider value={[services, setServices]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/service/:serviceId' element={
            <RequiredAuth>
              <CheckOut></CheckOut>
            </RequiredAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
      </ServiceContext.Provider>
  );
}

export default App;
