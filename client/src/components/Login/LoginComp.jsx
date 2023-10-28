import React from "react";
import { useLocation } from "react-router";
import LoginForm from "./LoginForm";

function LoginComp() {
  const location = useLocation();
  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);

  return (
    <div>
      <div className="py-5">
        <div className="contuct__us__left">
          <p className="capitalize">{url}</p>
          <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 ">
          Customer Login
          </p>
          <div className=" flex flex-col md:flex-row justify-between w-[80%] mx-auto my-2">
            <div className="py-9 px-14 bg-[#F5F7FF]">
              <p className="text-lg font-semibold">Registered Customers</p>
              <p className="text-sm py-2">If you have an account, sign in with your email address.</p>
              <LoginForm/>
            </div>
            
          </div>
        </div>
        <div className="contuct__us__right"></div>
      </div>
    </div>
  );
}

export default LoginComp;
