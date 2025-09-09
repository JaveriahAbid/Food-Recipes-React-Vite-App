import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = ""; // create account on spoonacular, generate key and paste here

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  // useEffect parameters- 1)call-back ft (2)dependency list [array]
  // this ft is executed everytime the component is rendered or re-rendered whenever dependency list is altered
  // useEffect(() => {
  //   // promises can be used instead of asyn and await - but the latter is better
  //   async function fetchFood() {
  //     // fetch() -> built-in JS ft to fetch an api
  //     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
  //     const data = await res.json();
  //     console.log(data.results);
  //     setFoodData(data.results);
  //   }
  // }, [query]);

  async function fetchFood() {
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data.results);
    setFoodData(data.results);
    //console.log("data.results");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchFood();
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.inputcontainer}>
        <input
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <button
          className={styles.modernbutton}
          onClick={(e) => handleSubmit(e)}
        >
          Search Recipe
        </button>
      </form>
    </div>
  );
}
