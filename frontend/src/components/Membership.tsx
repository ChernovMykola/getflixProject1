import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

function Membership({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="text-white text-center font-medium">
          Ready to watch? Click on the button below to become a member.
        </p>
      </div><br/>
      <div className="flex flex-col md:flex-row justify-center">
      <Link to="/api/auth/register">
        <button className="flex self-center w-32 md:w-52 items-center bg-subMain hover:subMain pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:m-0 md:text-2xl rounded text-white">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Membership;
