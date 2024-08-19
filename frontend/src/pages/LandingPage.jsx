import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import cred from "../assets/cred.jpg";

export const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists in local storage
    if (userToken) {
      navigate("/dashboard"); // Redirect to sign-in page if token doesn't exist
    }
  }, []);

  return (
    <>
    <Header/>
    
<div role="status" className="mx-64 mt-60 mb-40 max-w-screen-xl space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div className="flex items-center  animate-pulse justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <img src={cred}/>
    </div>
    <div className="w-full">  
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">E-Wallet with better deals.</span></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You focus on spending while we take care of your savings.</p>
    </div>
    <span className="sr-only">Loading...</span>
</div>


     <Footer/>
    </>
  );
};
