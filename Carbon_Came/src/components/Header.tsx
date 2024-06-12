import "@style/HeaderStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>COME</h1>
        <nav>
          <ul>
            <li>
              <a href="#what-is-bitcoin">What is Bitcoin?</a>
            </li>
            <li>
              <a href="#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="#get-started">Get Started</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <Link to={"/TestPage"}>TestPage</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
