import NavLogo from "./navLogo"

const MobileNavbar = () => {
    return (
        <nav className="mobile-nav">
            <NavLogo />

            <div className="hamburger">
                <img src="images/hamburger-menu.png" alt="hamburger menu" height="auto" width="40px" />
            </div>
        </nav>
    )
}

export default MobileNavbar;