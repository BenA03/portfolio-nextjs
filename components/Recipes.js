import RecipeCard from "@/components//RecipeCard";
import { useState } from "react";

function instantiateItems() {
    let recipeArr = [];
    for (let i = 0; i < 3; i++) {
        recipeArr.push("This is a card that the user did not make");
    }
    return recipeArr;
}

function Recipes() {
    const [list, alterList] = useState(instantiateItems());
    let recipeList = list.map((item, index) => {
        return <RecipeCard key={index} content={item + " (card number: " + (index + 1) + ")"} />
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