import React from "react";

const RecipeDetail = ({ recipe, onClose }) => {
  const roundedCalories = Math.round(recipe.recipe.calories);
  const randomCookingTime = Math.floor(Math.random() * (90 - 30 + 1)) + 30;
  const ingredients = recipe.recipe.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient.text}</li>
  ));

  return (
    <div className="RecipeDetail text-center container mx-auto">
      <h2 className="text-3xl font-bold font-underline mb-3">
        {recipe.recipe.label}
      </h2>
      <img className="mx-auto mb-3" src={recipe.recipe.image} alt="" />
      <h3 className="text-2xl font-bold mt-3">Calories:</h3>
      <p className="font-light">{roundedCalories}</p>
      <h3 className="text-2xl font-bold mt-3">Cooking Time:</h3>
      <p className="font-light">{randomCookingTime} minutes</p>
      <h3 className="text-2xl font-bold mt-3">Ingredients:</h3>
      <ul>{ingredients}</ul>
      <h3 className="text-2xl font-bold mt-3">Directions:</h3>
      <p className="font-light">Just throw it together and viola!</p>
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default RecipeDetail;
