import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import Preloader from "./base/preload";
import Layout from "./base/Layout";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/AboutUs";
import Reservation from "./Components/Reservation";
import OrderFood from "./Components/OrderFood";
import History from "./Components/History";
import Login from './Authentication/Login'; // Assuming you have a LoginPage component
import SignUp from './Authentication/SignUp';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true); // State to track whether to show login or signup

  // Function to toggle between login and signup pages
  const toggleLoginSignup = () => {
    setIsLogin(prevState => !prevState);
  };
 
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 3000);
   }, []);

  return (
    <>
     {isLoading ? (
        <Preloader />
      ) : (
        <>
      <CssBaseline />
      <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="LogIn" element={<Login/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="Home" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Reservation" element={<Reservation />} />
          <Route path="OrderFood" element={<OrderFood />} />
          <Route path="History" element={<History/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
        </Route>
      </Routes>
        
      </Router>
      </>
      )}
    </>
  );
}

export default App;