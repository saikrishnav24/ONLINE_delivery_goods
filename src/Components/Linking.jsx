import { Outlet, Link } from "react-router-dom";
const Linking = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Next</Link>
          </li>
          <li>
            <Link to="/primary">Next</Link>
          </li>
          <li>
            <Link to="/Source">Submit</Link>
          </li>
        </ul>
      </nav>
      {
       
      }
      {Outlet}
    </>
  );
};
export default Linking;
