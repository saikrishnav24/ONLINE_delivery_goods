import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>

                    
                    <li>
                        <Link to="/source">Source</Link>
                    </li>
                    <li>
                        <Link to="/destination" >Destination(Protected)</Link>
                    </li>
                    <li>
                        <Link to="/submit" >Submit</Link>
                    </li>
                    <li>
                        <Link to="/confirm" >Confirm</Link>
                    </li>
                    
                </ul>
            </nav>
            {Outlet}
        </>
    )
}
export default Layout;