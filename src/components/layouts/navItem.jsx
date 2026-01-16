
const NavItem = (props) => {
    const { key, label, path } = props;
    return (
        <li>
            <a href={path} key={key}>{label}</a>
        </li>
    )
}

export default NavItem;