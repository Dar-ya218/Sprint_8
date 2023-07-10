import logo from '/logo.svg'
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <div className="topNav">
                <button className="logoButton">
                    <Link to={"/"}>
                    <img src={logo} className='logo' alt="logo" />
                    </Link>
                </button>
                <div className="loginAndSignupDiv">
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className="bottomNav">
                <button className='navbarHomeButton'>
                    <Link to={"/"}>Home</Link>
                </button>
                <button className='navbarStarshipsButton'>
                <Link to={"/starships"}>Starships</Link>
                </button>
            </div>
        </nav>
    );
}
