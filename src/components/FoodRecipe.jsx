import { useEffect, useState } from "react";
import styles from "./foodrecipe.module.css";
import ItemList from "./ItemList";

const API_KEY = ""; // create account on spoonacular, generate key and paste here

export default function FoodRecipe({ foodId }) {
  const [food, setFood] = useState({}); // details of foodId
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      // url has to be inside useEffect,
      // else upon first website render, error occurs as foodId isn't selected yet
      const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    // fetchRecipe(); //un-comment to fetch recipies of different cuisines
  }, [foodId]); // fetchRecipe() runs everytime foodId changes.

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian 🥬" : "🍗 Non-Vegetarian 🥩"}
            </strong>
          </span>
          <span>
            <strong> {food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          {" "}
          <span>
            <strong>$ {food.pricePerServing / 100} Per serving </strong>
          </span>
        </div>
        <h2>Ingredients:</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Intructions:</h2>{" "}
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
