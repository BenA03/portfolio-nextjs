import RecipeCard from "@/components//RecipeCard";
import { useState } from "react";

function instantiateItems() {
    let recipeArr = [];
    for (let i = 0; i < 5; i++) {
        recipeArr.push("Test");
    }
    return recipeArr;
}

function alterList(list) {
    console.log("Hi!");
    list.push("Hi!");
}

function Recipes() {
    const [list, alterList] = useState(instantiateItems());
    let recipeList = list.map((item, index) => {
        return <RecipeCard key={index} content={item} />
    })
    return (
        <>
            {recipeList}
            <div className="centerFlex">
                    <button className="btn btn-primary center btn-lg vertical-spacing" onClick={() => alterList([...list, "Hi!"])}>+ Add a card</button>
            </div>
        </>
    );
}

export default Recipes;