function removeThis(props) {
    let list = props.currList;
    list.splice(props.index, 1);
    console.log(list);
    props.editList([...list]);
}

function RecipeCard(props) {
    return (
        <div class="card small-card center vertical-spacing">
            <div class="card-body column">
                {props.content}
                <button
                    className="btn btn-sm btn-danger vertical-spacing"
                    style={{ width: 200 }}
                    onClick={()=>removeThis(props)}
                >Remove recipe</button>
            </div>
        </div>);
}

export default RecipeCard;