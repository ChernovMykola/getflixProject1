import React from "react";
import { signIn } from "next-auth/react";
import logo from "../assets/netvibe_2-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

function SigninBanner({}: Props) {
  return (
    <div className="h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
      <div className="bg-black bg-opacity-70 h-[100vh]">
        <div className="flex items-center justify-between ">
        <Link to="/landing">
          <img
            className="w-28 sm:w-20 lg:w-42 ml-4 sm:ml-8 pt-4"
            src={logo}
            alt="logo"
          /></Link>
          <div className="flex mr-4 sm:mr-10">
          <Link to="/api/auth/login">
          <button
              className="h-8 px-1 sm:px-4 m-2 text-white bg-subMain rounded hover:subMain">
              Log In
            </button>
            </Link>
            <Link to="/api/auth/register">
            <button
              className="h-8 px-1 sm:px-4 m-2 text-white bg-subMain rounded hover:bg-subMain">
              Sign up
            </button>
            </Link>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium">
          NETVIBE presents all exclusive movies..
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg lg:text-base font-medium sm:px-[26%] md:px-[10%] m-2 sm:m-3 px-12">
            Ready to watch? Click on the button below to become a member.
          </p><br/>
          <div className="flex flex-col md:flex-row justify-center">
          <Link to="/api/auth/register">
            <button className="flex self-center w-32 md:w-52 items-center bg-subMain hover:subMain pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:m-0 md:text-2xl rounded">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninBanner;
