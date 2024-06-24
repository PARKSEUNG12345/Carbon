import "@style/FooterStyle.css";
import logo from "@assets/carbonLogo.png";
const Footer = () => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="footer">
        <div className="footerlogo">
          <img className="logoImg" src={logo} />
          <h2>CAME</h2>
        </div>
        <div className="snsIcon">
          <div className="facebook">F</div>
          <div className="facebook">I</div>
          <div className="facebook">X</div>
          <div className="facebook">Y</div>
          <div className="facebook">T</div>
        </div>
        <div className="title">
          <h3>topic</h3>
          <p>page</p>
          <p>page</p>
          <p>page</p>
        </div>
        <div className="title t2">
          <h3>topic</h3>
          <p>page</p>
          <p>page</p>
          <p>page</p>
        </div>
        <div className="title t3">
          <h3>topic</h3>
          <p>page</p>
          <p>page</p>
          <p>page</p>
        </div>
        <div className="title t4">
          <h3>topic</h3>
          <p>page</p>
          <p>page</p>
          <p>page</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
