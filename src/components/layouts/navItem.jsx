
const NavItem = (props) => {
    const { label, path } = props;
    return (
        <li>
            <a href={path} key={label}>{label}</a>
        </li>
    )
}

export default NavItem;