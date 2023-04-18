import Ingredient from "@/components/Ingredient";

function removeThis(props) {
    let list = props.currList;
    list.splice(props.index, 1);
    console.log(list);
    props.editList([...list]);
}

function RecipeCard(props) {
    const recipe = props.content;
    let ingredientsList = (recipe.ingredients).map((ingredient, index) => {
        return <Ingredient
            key={index}
            ingredient={ingredient}
        />
    })
    return (
        <div class="card small-card center vertical-spacing">
            <div class="card-body column">
                <h2>{recipe.title}</h2>
                <ul>{ingredientsList}</ul>
                <p>Serving size: {recipe.servingSize}</p>
                <button
                    className="btn btn-sm btn-danger vertical-spacing"
                    style={{ width: 200 }}
                    onClick={() => removeThis(props)}
                >Remove recipe</button>
            </div>
        </div>);
}

export default RecipeCard;