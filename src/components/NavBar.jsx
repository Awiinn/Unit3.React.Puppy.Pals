import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="title">
        <strong>PuppyBowl</strong>
      </div>
      <br />
      <nav className="nav">
        <div className="nav-link">
          <Link to="/">All Players</Link>
        </div>
        <div className="nav-link">
          <Link to="/form">Add New Player Form</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
