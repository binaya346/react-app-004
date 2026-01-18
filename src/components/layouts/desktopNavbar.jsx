import NavItem from "./navItem";
import NavLogo from "./navLogo"
import Button from "../reusable/button"

const DesktopNavbar = () => {
    const navItems = [
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Projects", path: "/projects" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ]

    return (
        <div className="desktop-nav">
            <NavLogo />

            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem 
                            key={index} 
                            label={item.label} 
                            path={item.path} 
                        />
                    ))}
                </ul>
            </nav>

            <div className="get-started">
                <Button variant="primary">Get Started</Button>
            </div>
        </div>
    )
}

export default DesktopNavbar;