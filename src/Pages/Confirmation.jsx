import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { meal, user },
  } = location;
  const handleFinish = () => {
    navigate("/", { state: { meal: {}, user: {} } });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-800 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center p-8 bg-white rounded shadow-md">
        {/* Left side: Meal Image */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
          <img
            src={meal.strCategoryThumb}
            alt={meal.strCategory}
            className="w-full max-h-full"
          />
          <p className="text-center text-black">{meal.strCategory}</p>
        </div>

        {/* Right side: User Details and Order Status */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Order Confirmation
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-black">
              User Details:
            </h3>
            <p>
              <span className="font-semibold text-black">Full Name:</span>{" "}
              <span className="text-black">{user.fullName}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Email:</span>{" "}
              <span className="text-black">{user.email}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Address:</span>{" "}
              <span className="text-black">{user.address}</span>
            </p>
            <p>
              <span className="font-semibold text-black">City:</span>{" "}
              <span className="text-black">{user.city}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Postal Code:</span>{" "}
              <span className="text-black">{user.postalCode}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Country:</span>{" "}
              <span className="text-black">{user.country}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Phone Number:</span>{" "}
              <span className="text-black">{user.phoneNumber}</span>
            </p>
          </div>
          <p className="text-lg font-semibold text-black">
            Order Status: Purchased
          </p>
        </div>
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleFinish}
      >
        OK
      </button>
    </div>
  );
};

export default OrderConfirmation;
