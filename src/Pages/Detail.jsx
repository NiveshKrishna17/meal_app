import { LeftSquareTwoTone } from "@ant-design/icons";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state: category } = location;
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  const handleBack = () => {
    navigate("/");
  };

  const handleBuy = () => {
    navigate("/checkout", { state: category });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:h-screen h-full bg-indigo-800">
      {/* Left side: Image and Back Button */}
      <div className="w-full md:w-1/2 p-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
          onClick={handleBack}
        >
          <LeftSquareTwoTone />
          Back
        </button>
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="w-full max-h-full shadow-inherit"
        />
      </div>

      {/* Right side: Name, Description, and Buy Button */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">{strCategory}</h2>
          <p className="text-lg text-white">{strCategoryDescription}</p>
        </div>
        <div className="w-full flex items-center justify-center md:justify-start mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
