import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10">
          <div className="font-bold text-2xl flex items-center cursor-pointer text-gray-800 font-[Poppins]">
            <span className="text-3xl text-indigo-800 mr-1 pt-2">
              <ion-icon name="fast-food"></ion-icon>
            </span>
            Task - Meals
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
