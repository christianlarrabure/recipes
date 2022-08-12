import axios from 'axios';
import { useState, useEffect } from 'react';

import { RecipeList } from './components/RecipeList.jsx';
import { Recipe } from './components/Recipe.jsx';

import './css/main.css';

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    axios.get("https://urchin-app-jcoem.ondigitalocean.app/api/v1/recipes/")
      .then((data) => {
        resolve(data.data);
      })
  })
}

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((recipes) => {
      setRecipes(recipes);
    })
  }, [])

  return (
    <main>
      <RecipeList>
        {recipes.map(recipe => (<Recipe key={recipe.id} recipe={recipe}/>))}
      </RecipeList>
    </main>
  );
}

export default App;