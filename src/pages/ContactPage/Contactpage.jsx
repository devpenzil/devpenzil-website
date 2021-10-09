import React from "react";
import { hero } from "../../components/Assets";
import Navbar from "../../components/Navbar";
import Form from "./components/Form";
function Contactpage() {
  return (
    <div className="w-full min-h-screen dark:bg-gray-800 bg-white">
      <Navbar />
      <div className="container md:w-2/3 mx-auto py-4 px-4 ">
        <div>
          <img
            src={hero}
            className="w-14 rounded-full mb-4 cursor-pointer"
            alt=""
          />
          <div className="text-2xl font-semibold dark:text-white">Contact Me</div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
