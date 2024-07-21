import "@style/FooterStyle.css";

import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import facebookIcon from "@assets/facebook.png";
import youtubeIcon from "@assets/youtube.png";
import instagramIcon from "@assets/instagram.png";
import twitterIcon from "@assets/X.png";
import tiktokIcon from "@assets/tikto.png";

const carmCameSns = {
  facebook: {
    link: "https://www.facebook.com/CarbonZero.official/",
    icon: facebookIcon,
    alt: "페이스북",
  },
  youtube: {
    link: "https://www.youtube.com/@carbonzero_official",
    icon: youtubeIcon,
    alt: "유튜브",
  },
  instagram: {
    link: "https://www.instagram.com/carbonzero_official/",
    icon: instagramIcon,
    alt: "인스타그램",
  },
  twitter: {
    link: "https://twitter.com/CarbonZero_CAME",
    icon: twitterIcon,
    alt: "트위터",
  },
  tiktok: {
    link: "https://www.tiktok.com/@carbonzero",
    icon: tiktokIcon,
    alt: "틱톡",
  },
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
              <span>CAME</span>
            </Link>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/CarbonZero.official/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="페이스북" />
            </a>
            <a href="https://www.youtube.com/@carbonzero_official" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="유튜브" />
            </a>
            <a href="https://www.instagram.com/carbonzero_official/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="인스타그램" />
            </a>
            <a href="https://twitter.com/CarbonZero_CAME" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="트위터" />
            </a>
            <a href="https://www.tiktok.com/@carbonzero" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="틱톡" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-topic">
              <h3>소개</h3>
              <a href="/personal">개인</a>
              <a href="/Businesses">사업자</a>
              <a href="/CoinStart">시작하기</a>
              <a href="/HowItWorks">기본원리</a>
            </div>
            <div className="footer-topic">
              <h3>참여</h3>
              <a href="/Support">CAME지지</a>
              <a href="/Terms">용어</a>
            </div>
            <div className="footer-topic">
              <h3>
                <a href="/Faq">자주 문는 질문관 답변</a>
              </h3>
            </div>
            <div className="footer-topic">
              <h3>
                <a href="/Innovation">혁신</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
