import React from "react";
import Nutritions from './Nutritions';
import SinglePageHeader from './InnerPageHeader';
import RecipeCard from "./RecipeCard";
import { useEffect } from "react";
import { useState } from "react";


function SingleRecipe(props) {

    const [recipe, setRecipe] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            //const res = await fetch(`https://enigmatic-crag-17408.herokuapp.com/recipe/${props._id}`);
            const res = await fetch(`http://localhost:8081/recipe/${props._id}`);
            res.json().then((res) => setRecipe(Object.assign(res._doc, {suggestions: res.suggestions})));
        }
        fetchData();
    }, [props._id]);

    console.log(recipe)

    let listItems = null;
    if(recipe)
    {listItems = recipe.ingredients.map((ingredient) =>
        <li className="border-bottom">{ingredient}</li>
    );}
    
        if(!recipe){
            return <div className="container-fluid nopadding-container">Nope, there is nothing to show</div>
        }
    return <div className="container-fluid nopadding-container">

        <SinglePageHeader
            imgURL = {recipe.imgURL}
            name =  {recipe.name}
        />
                <div className="container single-recipe-container">
                    <div className="row">
                        <div className="col-12"> 
                            <br/>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <p>{recipe.shortDescription} </p>
                            <hr/>
                            <h5>Preparation
                            </h5>
                            <p>{recipe.preparation}</p>
                            <hr/>
                            <h5>Nutritions</h5>
                            <Nutritions
                                kcal = {recipe.nutritionalValues.kcal}
                                fat = {recipe.nutritionalValues.fat}
                                saturates = {recipe.nutritionalValues.saturates}
                                carbs = {recipe.nutritionalValues.carbs}
                                sugars = {recipe.nutritionalValues.sugars}
                                fibre = {recipe.nutritionalValues.fibre}
                                protein = {recipe.nutritionalValues.protein}
                                salt = {recipe.nutritionalValues.salt}
                            />
                            <hr/>
                            <div className = "row">
                                <div className="col">
                                    <h5>Time</h5>
                                    {recipe.time}
                                </div>
                                <div className="col">
                                    <h5>Portion</h5>
                                    {recipe.portion}
                                </div>
                                <div className="col">
                                    <h5>Categories</h5>
                                    {recipe.category}
                                </div>

                            </div>
                            <br />
                            <div className = "row">
                                <div className = "col" style={{display: "block"}}><h5>Tags & Suggestions</h5>
                                {
                                    recipe.tags ? recipe.tags.map (tag => {
                                        return <span className="tag-unit">{tag}</span>;
                                    }) : ""
                                }
                                </div>
                            </div>
                            <br />
                            <div className = "row">
                                {
                                    recipe.suggestions ? recipe.suggestions.map(suggestion => {
                                        return (
                                            <RecipeCard
                                                img={suggestion.imgURL}
                                                name={suggestion.name}
                                                shortDescription={""}
                                                category={suggestion.category}
                                                key={suggestion._id}
                                                _id={suggestion._id}
                                            />
                                        )
                                    }): ""
                                }
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pl-3 ingredients-container">
                            <h5 className="ml-4">Ingredients</h5>
                            <ul className="ingredients-list" id="ingredients">
                            {listItems}                         
                            </ul>
                            <img loading="lazy" alt="Thumbnail of the food" width="300" src={recipe.imgURL}/>
                        </div>
                        <div className = "comments">

                        </div>
                    </div>
                </div>
            </div>    

};

export default SingleRecipe;