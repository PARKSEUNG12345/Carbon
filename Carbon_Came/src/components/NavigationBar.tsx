import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="top-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span>CAME</span>
        </Link>
      </div>
      <nav className="nav">
        <div className="nav-item">
          <h3 onClick={() => toggleDropdown(0)}>
            소개 <span className="arrow">▼</span>
          </h3>
          {dropdownOpen[0] && (
            <div className="dropdown">
              <Link to="/personal">개인</Link>
              <Link to="/Businesses">사업자</Link>
              <Link to="/CoinStart">시작하기</Link>
              <Link to="/HowItWorks">기본원리</Link>
            </div>
          )}
        </div>
        <div className="nav-item" onClick={() => toggleDropdown(1)}>
          <h3>
            참여 <span className="arrow">▼</span>
          </h3>
          {dropdownOpen[1] && (
            <div className="dropdown">
              <Link to="/Support">CAME지지</Link>
              <Link to="/Terms">용어</Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <h3>
            <Link to="/Innovation">혁신</Link>
          </h3>
        </div>
        <div className="nav-item">
          <h3>
            <Link to="/Faq">자주 묻는 질문과 답변</Link>
          </h3>
        </div>
      </nav>
      <select className="lang">
        <option value="ko">한국어</option>
        <option value="km">크메르어</option>
      </select>
    </div>
  );
};

export default NavigationBar;
