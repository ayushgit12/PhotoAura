import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { url } from "./helper.js";
import { MagnifyingGlass } from "react-loader-spinner";

const MainPage = () => {
  const [file, setFile] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDetect = async () => {
    if (!file) {
      toast("Please upload an image", {
        icon: "⛔️",
      });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);
    try {
      const res = await axios.post(`${url}/predict_image`, formData);
      setResult(res.data);
      localStorage.setItem("result", res.data);
      navigate("/result");
    } catch (err) {
      console.log(err);
      toast.error("Error in detecting image");
      setFile(null);
    }
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <Toaster />
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-[200%]">
          <MagnifyingGlass
          loading={loading}
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />{" "}
        </div>
      )}

      <div className="bg-[#FBFFF4] min-h-screen">
        <div className="bg-cyan-400 h-20">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="bg-gray-300 px-2 py-2 rounded-xl absolute left-16 top-4 flex justify-between gap-2 items-center"
          >
            <FaHome size={35} />
          </button>
        </div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className=" h-72 max-h-screen top-24 left-1/2 w-[80%] mx-auto max-w-screen-sm mt-4"
          />
        )}
        <div className={`w-[80%] mx-auto max-w-screen-sm  mt-4 border p-10 rounded-xl flex flex-col ${!file ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}`}>
          <input type="file" name="" id="" onChange={handleChange} />
          <button
            className="bg-cyan-400 outline-none px-4 py-2 rounded-lg mt-4"
            onClick={handleDetect}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
