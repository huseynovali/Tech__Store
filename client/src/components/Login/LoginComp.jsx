import React from "react";
import { useLocation } from "react-router";
import LoginForm from "./LoginForm";
import Button from "../Buttons/Button";

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
          <div className=" flex flex-col md:flex-row justify-between md:w-[80%] mx-auto my-2">
            <div className="py-9 px-14 bg-[#F5F7FF] md:w-[48%] ">
              <p className="text-lg font-semibold">Registered Customers</p>
              <p className="text-sm py-2">
                If you have an account, sign in with your email address.
              </p>
              <LoginForm />
            </div>
            <div className="py-9 px-14 bg-[#F5F7FF] md:w-[48%] my-5 md:my-0">
              <p className="text-lg font-semibold">New Customer?</p>
              <p className="text-sm py-3">
                Creating an account has many benefits:
              </p>
              <div>
                <p className="text-sm py-1">• Check out faster</p>
                <p className="text-sm py-1">• Keep more than one address</p>
                <p className="text-sm py-1">• Track orders and more</p>
              </div>
              <Button className="bg-[#0156FF] px-16 py-3 rounded-[50px] text-white text-sm mb-2 mt-6">
                Create An Account
              </Button>
            </div>
          </div>
        </div>
        <div className="contuct__us__right"></div>
      </div>
    </div>
  );
}

export default LoginComp;
