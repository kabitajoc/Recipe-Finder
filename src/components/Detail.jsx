import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

import Input from "./Input";

const Detail = () => {
  const [recipes, setRecipes] = useState([]);
  const [isSelectedRecipe, setIsSelectedRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRecipes = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchQuery
    );
    setRecipes(response.data.meals);
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]);

  const viewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsSelectedRecipe(true);
  };
  const backToHome = () => {
    setIsSelectedRecipe(false);
  };

  const handleInputChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <div>
      {isSelectedRecipe && selectedRecipe && (
        <div className="detail-page">
          <button className="backButton" onClick={() => backToHome()}>
            Back
          </button>
          <div className="detail-header">
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              height="300px"
              width="300px"
            />
            <p>
              <strong>Name</strong>:{selectedRecipe.strMeal}
            </p>
            <p>
              <strong>Category</strong>:{selectedRecipe.strCategory}
            </p>
            <p>
              <strong>Area</strong>:<span>{selectedRecipe.strArea}</span>
            </p>
          </div>
          <div className="detail-info">
            <h3>Ingredients:</h3>
            <ul>
              <li>{selectedRecipe.strIngredient1}</li>
              <li>{selectedRecipe.strIngredient2}</li>
              <li>{selectedRecipe.strIngredient3}</li>
              <li>{selectedRecipe.strIngredient4}</li>
              <li>{selectedRecipe.strIngredient5}</li>
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedRecipe.strInstructions}</p>
          </div>
        </div>
      )}
      {!isSelectedRecipe && (
        <>
          <Input onChange={handleInputChange} />

          <ul className="recipe-list">
            {recipes &&
              recipes.map((recipe) => {
                return (
                  <li className="recipe-item" key={recipe.idMeal}>
                    <h2 className="recipe-name">{recipe.strMeal}</h2>
                    <img
                      className="recipe-image"
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                    />
                    <button onClick={() => viewRecipe(recipe)}>View</button>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Detail;
