import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useState } from "react";

let url_ = process.env.MODE !== "production" ? "https://enigmatic-crag-17408.herokuapp.com/recipes" : ""

function MealSuggestions() {

    const [Recipes, setRecipes] = useState({data: []});

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(url_);
            res.json().then(res => setRecipes({data: res}));
        }
        fetchData();
    }, []);

    var breakfastRecipes = [];
    var lunchRecipes = [];
    var dinnerRecipes = [];
    var selectedBreakfast;
    var selectedLunch;
    var selectedDinner;

    function breakfastSuggestion() { 
            Recipes.data.map(function(e){
                if(e.category[0] === "breakfast"){
                    breakfastRecipes.push(e);
                }
                return null;
            });
    selectedBreakfast = breakfastRecipes[Math.floor(Math.random() * (breakfastRecipes.length))];
    };

    function lunchSuggestion() { 
        Recipes.data.map(function(e){
            if(e.category[0] === "lunch"){
                lunchRecipes.push(e);
            }
            return null;
        });
selectedLunch = lunchRecipes[Math.floor(Math.random() * (lunchRecipes.length))];
};

function dinnerSuggestion() { 
    Recipes.data.map(function(e){
        if(e.category[0] === "dinner"){
            dinnerRecipes.push(e);
        }
        return null;
    });
selectedDinner = dinnerRecipes[Math.floor(Math.random() * (dinnerRecipes.length))];
};

return <div className="container meal-suggestions">
            <h1 className="mb-5">Here are our suggestions for today!</h1>
                    {breakfastSuggestion()}
                    {lunchSuggestion()}
                    {dinnerSuggestion()}
                    <div className="row">
                        <div className = "col-2">
                    </div>
                    { Recipes.data.length && 
                    (<><RecipeCard
                        img={selectedBreakfast.imgURL}
                        name={selectedBreakfast.name}
                        shortDescription={selectedBreakfast.shortDescription}
                        category={selectedBreakfast.category}
                        _id={selectedBreakfast._id}
                    />
                    <RecipeCard
                        img={selectedLunch.imgURL}
                        name={selectedLunch.name}
                        shortDescription={selectedLunch.shortDescription}
                        category={selectedLunch.category}
                        _id={selectedLunch._id}
                    />
                    <RecipeCard
                        img={selectedDinner.imgURL}
                        name={selectedDinner.name}
                        shortDescription={selectedDinner.shortDescription}
                        category={selectedDinner.category}
                        _id={selectedDinner._id}
                    /></>)
                    }
                    <div className = "col-2"></div>
                    </div>
         </div>
};

export default MealSuggestions;