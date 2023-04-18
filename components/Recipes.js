import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";

function instantiateItems() {
    let recipeArr = [];
    const tacoIngredients = ['Ground beef', 'Cheese', 'Tortillas', 'Sour Cream'];
    const spaghettiIngredients = ['Spaghetti', 'Tomato sauce', 'Meatballs', 'Parmesan'];
    const pizzaIngredients = ['Dough', 'Crushed tomatoes', 'Garlic', 'Mozzarella'];
    recipeArr.push({ title: "Tacos", ingredients: tacoIngredients, servingSize: 4 });
    recipeArr.push({ title: "Spaghetti and Meatballs", ingredients: spaghettiIngredients, servingSize: 5 });
    recipeArr.push({ title: "Pizza", ingredients: pizzaIngredients, servingSize: 2 });
    return recipeArr;
}

function Recipes() {
    const [list, alterList] = useState(instantiateItems());
    let newRecipe = {}
    function packageObject() {
        try {
            newRecipe.ingredients = newRecipe.ingredients.split(', ');
            console.log(newRecipe.title);
            console.log(newRecipe.ingredients);
            console.log(newRecipe.title);
            alterList([...list, newRecipe]);
            const clearBoxes = document.getElementsByTagName("input")
            for (let i = 0; i < clearBoxes.length; i++)
            {
                clearBoxes[i].value = '';
            }
        }
        catch
        {
            console.log("Error!!!");
        }
    }

    let recipeList = list.map((item, index) => {
        return <RecipeCard
            key={index}
            index={index}
            content={item}
            editList={alterList}
            currList={list}
        />
    })
    return (
        <>
            {recipeList}
            <form class="card small-card center vertical-spacing">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Recipe title</span>
                        <input type="text" className="form-control" placeholder="The title of your recipe"
                            onChange={(e) => (newRecipe.title = e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Ingredients List</span>
                        <input type="text" className="form-control" placeholder="Enter as a comma seperated list"
                        onChange={(e) => (newRecipe.ingredients = e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Servings</span>
                        <input type="text" className="form-control" placeholder="Enter as a plain number value"
                        onChange={(e) => (newRecipe.servingSize = e.target.value)}/>
                    </div>

                    <div className="center">
                        <button type="button" className="btn btn-lg btn-success vertical-spacing" 
                        onClick={() => packageObject()}>
                            + Add this recipe</button>
                    </div>

                </div>
            </form >
        </>
    );
}

export default Recipes;