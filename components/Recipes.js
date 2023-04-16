import RecipeCard from "@/components//RecipeCard";

let items = fillItems();
function fillItems() {
    let recipeArr = [];
    for (let i = 0; i < 10; i++)
    {
        recipeArr.push("Hello!");
    }
    return recipeArr;
}

let recipeList = items.map((item, index) => {
    return <RecipeCard key={index} content={item} />
})

function Recipes() {
    return (
        <>
            {recipeList}
        </>
    );
}

export default Recipes;