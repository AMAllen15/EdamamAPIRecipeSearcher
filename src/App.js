import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  const APP_ID = "14da8ac9";
  const APP_KEY = "93e0dd78069d23130629214a6b57a843";
  const [recipes, setRecepices] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mushroom");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const resp = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await resp.json();
    if (data.count > 0) {
      setRecepices(data.hits);
    } else {
      alert(`What you search "${query}" not found`);
    }
  };

  const handleClickRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <Search search={search} setQuery={setQuery} setSearch={setSearch} />
      <h1 className="text-center text-4xl font-bold my-5">
        Recipes using Edamam API
      </h1>
      <div className="flex flex-wrap">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
        ) : (
          recipes.map((recipe) => (
            <div className="w-1/3 p-4 border border-gray-300">
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                img={recipe.recipe.image}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredients}
                onClick={() => handleClickRecipe(recipe)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
