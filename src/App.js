import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home'
import Check from './components/Pages/Check/Check'
import Signup from './components/Shared/Signup/Signup';
import Login from './components/Shared/Signup/Login';


function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/check/:id" element={<Check></Check>}></Route>
      </Routes>
    </div>
  );
}

export default App;
