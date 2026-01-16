// import "./navbar.css";
import styles from "./navbar.module.css"

const Navbar = (props) => {
    const { navItems } = props
    // const navItems = [
    //     { url: "/home", label: "Home" },
    //     { url: "/about", label: "About" },
    //     { url: "/contact", label: "Contact" },
    // ]
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex', listStyleType: "none" }}>
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <a href={navItem.url} style={{ color: "black" }}>{navItem.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;