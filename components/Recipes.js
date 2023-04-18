import RecipeCard from "@/components//RecipeCard";
import { useState } from "react";

function instantiateItems() {
    let recipeArr = [];
    const tacoIngredients = ['Ground beef', 'Cheese', 'Tortillas', 'Sour Cream'];
    const spaghettiIngredients = ['Spaghetti', 'Tomato sauce', 'Meatballs', 'Parmesan'];
    const pizzaIngredients = ['Dough', 'Crushed tomatoes', 'Garlic', 'Mozzarella'];
    recipeArr.push({title:"Tacos", ingredients: tacoIngredients, servingSize:4});
    recipeArr.push({title:"Spaghetti and Meatballs", ingredients: spaghettiIngredients, servingSize:5});
    recipeArr.push({title:"Pizza", ingredients: pizzaIngredients, servingSize:2});
    return recipeArr;
}

function Recipes() {
    const [list, alterList] = useState(instantiateItems());
    let recipeList = list.map((item, index) => {
        return <RecipeCard
            key={index}
            index={index}
            content={item}
            editList = {alterList}
            currList = {list}
        />
    })
    return (
        <>
            {recipeList}
            <div className="centerFlex">
                <div className="btn-group center" role="group">
                    <button type="button" className="btn btn-success vertical-spacing" onClick={() => alterList([...list, "This is a card the user added"])}>+ Add a card</button>
                    <button type="button" className="btn btn-danger vertical-spacing" onClick={() => alterList(list.slice(0, list.length - 1))}>Remove a card -</button>
                </div>
            </div>
        </>
    );
}

export default Recipes;