import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Signin = () => {
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
    <div className="m-40  flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg text-center p-2 h-max px-4 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 ">

          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
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
                  import.meta.env.VITE_SERVER_URL + "/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
