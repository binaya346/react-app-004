import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";
import "./header.css"

const Header = (props) => {

    return (
        <header>
            <MobileNavbar />
            <DesktopNavbar />
        </header>
    )
}

export default Header;