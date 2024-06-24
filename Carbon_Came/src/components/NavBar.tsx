import "@style/NavBar.css";
import logo from "@assets/carbonLogo.png";
const NavBar = () => {
  return (
    <div className="navbar" style={{ position: "relative", height: "100px" }}>
      <div className="nav">
        <div className="logo">
          <img className="logoImg" src={logo} />
          <h2>CAME</h2>
        </div>
        <ul className="linkPage">
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <button className="languageSelect">한국어</button>
      </div>
    </div>
  );
};

export default NavBar;
