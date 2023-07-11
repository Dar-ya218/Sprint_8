import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="welcomeTitle">Welcome to the Galaxy</h1>
                <p className="welcomeMessage">
                    Explore the Star Wars starships and discover their
                    fascinating details.
                </p>
                <br /><br />
                <Link to="/starships">
                    <button className="welcomeButton">
                        Access the Starships
                    </button>
                </Link>
            </div>
        </>
    );
}
