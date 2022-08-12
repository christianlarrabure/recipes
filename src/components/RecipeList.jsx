import React from "react";
import '../css/Recipes.css';

function RecipeList(props) {
    return (
        <section className="recipe-list">
            {props.children}
        </section>
    )
}

export { RecipeList };