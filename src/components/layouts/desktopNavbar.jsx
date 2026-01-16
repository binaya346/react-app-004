import NavItem from "./navItem";

const DesktopNavbar = () => {
    const navItems = [
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Projects", path: "/projects" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ]

    return (
        <div className="desktop-nav">
            <div className="nav-logo">
                <span>A</span>
                <div className="logo-text">AntByte labs</div>
            </div>

            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem key={index} label={item.label} path={item.path} />
                    ))}
                </ul>
            </nav>

            <div className="get-started">
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    )
}

export default DesktopNavbar;