
import './App.css';

import { Route,Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Admin from './components/Admin';
import User from './components/User';
import Viewmovie from './components/Viewmovie';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Userhome from './components/Userhome';
import Usermovie from './components/Usermovie';
import Userbooking from './components/Userbooking';

import UserProfile from './components/Userprofile';
import Logout from './components/Logout';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Adminmovies from './components/Adminmovies';
import AdminUsers from './components/Adminusers';
import Adminbookings from './components/Adminbookings';
import AddMovies from './components/Addmovies';






function App() {


  
  return (
  <>
    {/* <Header/> */}
    
    <section>
      <Routes>
      <Route path="/" element={<Homepage/>} />
       <Route path="/movies" element={<Viewmovie/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/Userhome" element={<Userhome/>}/>
          <Route path="/Usermovie" element={<Usermovie/>}/>
          
          <Route path="/Userbooking" element={<Userbooking/>}/>
          <Route path="/Userprofile" element={<UserProfile/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/Adminlogin" element={<AdminLogin/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          
          <Route path="/Adminmovies" element={<Adminmovies/>}/>
          <Route path="/Adminusers" element={<AdminUsers/>}/>
          <Route path="/Adminbookings" element={<Adminbookings/>}/>
          <Route path="/Addmovies" element={<AddMovies/>}/>
          
         
         
          </Routes>
    </section>
   
    
    
    </>
  );
  }
export default App;
















