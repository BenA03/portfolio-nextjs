import RecipeCard from "@/components//RecipeCard";

let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

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