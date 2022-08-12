import React from "react";

function Recipe(props) {
    console.log(props.recipe);
    return (
        <article className="recipe-list__recipe">
            <figure>
                <img src={props.recipe.image_link} alt="Una imagen de la receta" />
            </figure>
            <div className="recipe-list__recipe__card">
                <p className="recipe-list__recipe__card__title">{props.recipe.name}</p>
                <p className="recipe-list__recipe__card__credits">POR <a href={props.recipe.source_link}>{props.recipe.credits.toUpperCase()}</a>.</p>
            </div>
        </article>
    )
}

export { Recipe };