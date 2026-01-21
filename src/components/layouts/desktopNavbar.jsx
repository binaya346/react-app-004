import NavItem from "./navItem";
import NavLogo from "./navLogo"
import Button from "../reusable/button"

const DesktopNavbar = () => {
    const navItems = [
        { label: "Home", path: "/" },
        { label: "Wine", path: "/wine" },
        { label: "Coffee", path: "/coffee" },
    ]

    return (
        <div className="desktop-nav">
            <NavLogo />

            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem
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