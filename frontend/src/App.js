//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
//import Login from "./components/main/login";
import { Routes } from 'react-router-dom';
import AdminProfile from './components/admin/profile';
import Main from './components/main';
import User from './components/user';
import Admin from './components/admin';
import AdminDashboard from './components/admin/dashboard';
import AdminManageuser from './components/admin/manageuser';
import MainFooter from './components/main/footer';
import MainHeader from './components/main/header';
import MainHome from './components/main/home';
import MainLogin from './components/main/login';
import MainResetpassword from './components/main/resetPassword';
import MainSignup from './components/main/signup';
import UserProfile from './components/user/profile';
function App() {
  return (
   < BrowserRouter>
    <Routes>
      <Route element={<Admin/>} path="admin">
        <Route element={<AdminProfile/>} path="profile"/> 
        <Route element={<AdminDashboard/>} path="dashboard"/>
        <Route element={<AdminManageuser/>} path="manageuser"/>
      </Route>
      <Route element={<Main/>} path="main">
        <Route element={<MainFooter/>} path="footer"/>
        <Route element={<MainHeader/>} path="header"/>
        <Route element={<MainHome/>} path="home"/>
        <Route element={<MainLogin/>} path="login"/>
        <Route element={<MainResetpassword/>} path="resetPassword"/>
        <Route element={<MainSignup/>} path="signup"/>
      </Route>
      <Route element={<User/>} path="user">
        <Route element={<UserProfile/>} path="profile"/>
      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
