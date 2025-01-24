import React, { useState } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";

const Index = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="main ">
      <nav
        className="h-12 bg-yellow-500 text-black rounded-lg 
 flex justify-items-ce
 nter justify-end justify-between mt-5 "
      >
        <div className="mt-3 ml-10 hover:scale-150 ease-out duration-700 cursor-pointer">
          PAST_Mobile
        </div>
        <ul className="flex gap-20  mt-3 mr-24 cursor-pointer  ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallery</li>
        </ul>
      </nav>
      <main className="bg-yellow-500 flex justify-around rounded-md mt-4 ">
        <div className="bg-yellow-500 h-96 pl-16  ">
          <div className="text-5xl pt-16  ">Best Phone Deals.</div>
          <p className="w-80 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            magni veniam molestias enim nostrum est.
          </p>
          <div className="my-14">
            <button className="bg-black text-white rounded-md w-24 h-8 m-2 mt-5 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:scale-110 ease-out duration-700 active:bg-rose-950 ">
              Buy Now
            </button>
            <button className="bg-black text-white rounded-md w-24 h-8 m-2 mt-5 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:scale-110 ease-out duration-700 active:bg-rose-950  ">
              Contact Us
            </button>
          </div>
        </div>
        <dic className="flex  w-520 h-60 ">
          {showButton ? <img src={pic1} alt="" /> : <img src={pic2} alt="" />}
          <div className="bg-black text-white text-center rounded-md w-24 h-8 mt-72 mr-20  hover:bg-yellow-50 cursor-pointer hover:text-black hover:border-2 hover:border-black hover:scale-110 ease-out duration-700  active:bg-rose-950 ">
            <button
              onClick={() => {
                setShowButton(!showButton);
              }}
            >
              Change
            </button>
          </div>
        </dic>
      </main>
    </div>
  );
};

export default Index;
