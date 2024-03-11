import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import Preloader from "./preload";
import Layout from "./Layout";
import Home from "./Home";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Reservation from "./Reservation";
import OrderFood from "./OrderFood";
import History from "./History";
import Login from './Login'; // Assuming you have a LoginPage component
import SignUp from './SignUp';

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
          <Route index element={<Login/>} />
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