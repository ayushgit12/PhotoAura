import React, { useEffect } from "react";
import img from "./assets/dog.jpg";
import magglass from "./assets/magglass.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuScanFace } from "react-icons/lu";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-[#FBFFF4] min-h-screen relative">
        <div className="bg-cyan-400 h-20">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer select-none font-semibold text-3xl flex items-center gap-2 h-full ml-6"
          >
            <LuScanFace size={30} /> PhotoAura
          </p>
        </div>
        <div className="flex justify-between mx-4 flex-wrap md:mt-16 mt-4">
          <div className="select-none md:text-9xl text-8xl">
            <p data-aos="fade-right" className="my-6 font-bold">
              See,
            </p>
            <p
              data-aos-delay="800"
              data-aos="fade-right"
              className="my-6 font-bold"
            >
              Know,
            </p>
            <p
              data-aos-delay="1600"
              data-aos="fade-right"
              className="my-6 font-bold"
            >
              Learn !
            </p>
            <p className="text-2xl">See the world differently: </p>
            <p className="text-2xl mt-2 md:mb-0 mb-6">
              <span className="underline flex items-center gap-2 text-3xl">
                <LuScanFace />
                PhotoAura
              </span>{" "}
              your visual search companion!
            </p>
          </div>
          <div className="relative md:mx-0 mx-auto">
            <img
              src={img}
              className="border border-black shadow-xl h-[650px] rounded-xl"
              alt=""
            />
            <img
             data-aos-delay="1200"
              data-aos="zoom-in"
              className="absolute top-16 h-32 left-32"
              src={magglass}
              alt=""
            />
            <p
            data-aos-delay="2000"
              data-aos="zoom-in"
             className="absolute text-xl rounded-2xl py-1 text-center bg-gray-100 w-48 md:top-20 top-4 pl-4 md:right-64 right-1/2 flex items-center gap-4 border-black border">
              <FaMagnifyingGlass size={18} />
              <TypeAnimation
                sequence={[
                  2000,
                  "...",
                  2400,
                  "Dog",
                  2700,
                  "Husky",
                  3000,
                  "Husky 🐶",
                ]}
              />
            </p>
          </div>
        </div>
        <div className="text-center py-4 absolute bottom-0 left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate("/mainpage")}
            className="bg-cyan-400 px-5 py-3 text-2xl rounded-xl text-center"
          >
            Go to App
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
