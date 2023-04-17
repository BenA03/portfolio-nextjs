function NavButton(props) {
    return (
        <button className={props.shownTab === props.toggleName ? 'btn btn-dark margin-right' : 'btn btn-light margin-right'} onClick={() => props.stateChanger(props.toggleName)}>
            {props.toggleName}
        </button>);
}

export default NavButton;
