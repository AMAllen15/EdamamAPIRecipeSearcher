import React, { Component } from "react";

const Recipe = ({ title, img, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className="Recipe Container mx-auto" onClick={handleClick}>
      <div className=" flex flex-col text-center ">
        <img
          className="mx-auto rounded-3xl"
          width={200}
          height={200}
          src={img}
        />

        <div className="mt-5">
          <h1>
            <a className="text-2xl font-bold" href="#" onClick={handleClick}>
              {title}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
