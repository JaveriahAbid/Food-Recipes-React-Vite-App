import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodRecipe from "./components/FoodRecipe";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("680975");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodRecipe foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
