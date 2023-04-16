function NavButton(props) {
    return (
        <button className={props.shownTab === props.toggleName ? 'btn btn-primary margin-right' : 'btn btn-light margin-right'} onClick={() => props.stateChanger(props.toggleName)}>
            {props.visName}
        </button>);
}

export default NavButton;
