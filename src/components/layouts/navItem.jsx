import { NavLink } from "react-router-dom";

const NavItem = (props) => {
    const { label, path } = props;
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
                to={path} key={label}>{label}</NavLink>
        </li>
    )
}

export default NavItem;