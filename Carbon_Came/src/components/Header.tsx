import "@style/HeaderStyle.css";

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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
