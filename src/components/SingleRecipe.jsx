import React from "react";
import Nutritions from './Nutritions';
import SinglePageHeader from './InnerPageHeader';
import RecipeCard from "./RecipeCard";
import { useEffect } from "react";
import { useState } from "react";
import Comments from './Comments';
import Tag from './Tag';

const dynatext = require("dyna-gettext");


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
            return <div className="container-fluid nopadding-container">

            </div>
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
                            <h5>
                            {dynatext.getText("preparation", {id: "translations", "lang": props.lang || "en"})}
                            </h5>
                            <p>{recipe.preparation}</p>
                            <hr/>
                            <h5>{dynatext.getText("nutritions", {id: "translations", "lang": props.lang || "en"})}</h5>
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
                                    <h5>
                                    {dynatext.getText("time", {id: "translations", "lang": props.lang || "en"})}
                                    </h5>
                                    {recipe.time}
                                </div>
                                <div className="col">
                                    <h5>
                                    {dynatext.getText("portion", {id: "translations", "lang": props.lang || "en"})}
                                    </h5>
                                    {recipe.portion}
                                </div>
                                <div className="col">
                                    <h5>
                                    {dynatext.getText("cat", {id: "translations", "lang": props.lang || "en"})}
                                    </h5>
                                    {recipe.category}
                                </div>

                            </div>
                            <br />
                            <div className = "row">
                                <div className = "col" style={{display: "block"}}><h5>
                                {dynatext.getText("tags", {id: "translations", "lang": props.lang || "en"})}
                                </h5>
                                {
                                    recipe.tags ? recipe.tags.map (tag => {
                                        return <Tag  value = {tag} />
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
                        <Comments 
                            name = {recipe.name}
                            id = {recipe._id}
                        />
                    </div>
                </div>
            </div>    

};

export default SingleRecipe;