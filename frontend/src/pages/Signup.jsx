import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
  
    <div className="m-40 flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg text-center p-2 h-max px-4 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 ">
      <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="FirstName"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="LastName"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  import.meta.env.VITE_SERVER_URL + "/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
