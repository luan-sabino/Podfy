export default function NavBarAnchor(props) {
  return (
    <a id={props.id} className={'navbar-button ' + (props.isSelected === props.id ? 'selected' : '')} href='/' onClick={(e) => {props.handleSelection(props.id); e.preventDefault()}}>
        {props.icon}
        <span>{props.name}</span>
    </a>
  );
}