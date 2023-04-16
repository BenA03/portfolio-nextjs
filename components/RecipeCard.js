function RecipeCard(props) 
{
    return (
        <div class="card small-card center vertical-spacing">
            <div class="card-body">
                {props.content}
            </div>
        </div>);
}

export default RecipeCard;