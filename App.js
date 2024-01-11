
import './App.css';

import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Admin from './components/Admin';
import User from './components/User';
import Viewmovie from './components/Viewmovie';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
function App() {
  return (
  <>
    <Header/>
    <section>
      <Routes>
      <Route path="/Homepage" element={<Homepage/>} />
       <Route path="/movies" element={<Viewmovie/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </section>
    
    </>
  );
}

export default App;



// import './App.css';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Main from './components/Main';
// import Signup from './components/Signup';
// import Login from './components/Login';



// function App() {
//   const user = localStorage.getItem("token");

//   return (
//     <Routes>
//     {user && <Route path="/" element={<Main />} />}
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/login" element={<Login />} /> 
//     {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
//   </Routes>
// );
// }

// export default App;



