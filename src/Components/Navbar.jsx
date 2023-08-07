import "./Navbar.scss"
import logo from "./sk.png";
const Navbar = () => {
    return (
        <>
            <nav className="fixed-nav-bar">

                <nav className="navbar navbar-expand-lg navbar-dark ">

                    <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                </nav>

            </nav>
        </>
    )
}
export default Navbar;