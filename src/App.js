
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequiredAuth from './Pages/Auth/RequiredAuth/RequiredAuth';
import { ToastContainer, toast } from 'react-toastify';
import './Pages/Style/Style.css'
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
      <div className="App">
        <Header></Header>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/service/:serviceId' element={
            <RequiredAuth>
              <CheckOut></CheckOut>
            </RequiredAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
