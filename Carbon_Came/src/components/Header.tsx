import "@style/HeaderStyle.css";

import Banner from "@assets/1.png";
import NavigationBar from "@/components/NavigationBar";
const Header = ({ HeaderText = "", BannerText = "" }) => {
  return (
    <div className="header">
      <NavigationBar />
      <div className="main-banner">
        <img src={Banner} alt="Banner" className="banner-img" />
        <div className="banner-text">
          <h1>{HeaderText}</h1>
          <p>{BannerText}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
