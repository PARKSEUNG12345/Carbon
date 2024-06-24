import "@style/MainContentStyle.css";
import mainTitleImg from "@assets/mainTitleImg.png";
import backImg from "@assets/Rectangle.png";
const MainContent = () => {
  return (
    <div>
      <div className="main">
        <div className="mainTitle">
          <img className="mainTitleImg" src={mainTitleImg} />
          <img className="backImg" src={backImg} width={"100%"} height={"800px"} />
          <h2>asdfasdf</h2>
          <p>zxcvzxcv</p>
        </div>
        <div className="textBox">
          <div style={{ position: "relative" }}>
            <div className="textBox-icon">
              <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.125 22.0001C5.125 13.0945 12.0086 5.875 20.5 5.875C28.9914 5.875 35.875 13.0945 35.875 22.0001C35.875 30.9057 28.9914 38.1251 20.5 38.1251C12.0086 38.1251 5.125 30.9057 5.125 22.0001ZM20.5 8.27877C13.2745 8.27877 7.41696 14.422 7.41696 22.0001C7.41696 25.5058 8.67057 28.7046 10.7333 31.1299C12.9094 27.9406 16.4727 25.859 20.5009 25.859C24.5286 25.859 28.0915 27.9401 30.2677 31.1289C32.3299 28.7036 33.583 25.5053 33.583 22.0001C33.583 14.422 27.7255 8.27877 20.5 8.27877ZM28.5791 32.7933C26.8362 30.0596 23.8679 28.2628 20.5009 28.2628C17.1335 28.2628 14.165 30.0601 12.4221 32.7943C14.6464 34.6278 17.4514 35.7213 20.5 35.7213C23.5491 35.7213 26.3546 34.6275 28.5791 32.7933ZM14.8307 19.4825C14.8307 16.1985 17.3691 13.5363 20.5003 13.5363C23.6315 13.5363 26.1699 16.1985 26.1699 19.4825C26.1699 22.7664 23.6315 25.4286 20.5003 25.4286C17.3691 25.4286 14.8307 22.7664 14.8307 19.4825ZM20.5003 15.9401C18.6349 15.9401 17.1227 17.526 17.1227 19.4825C17.1227 21.4389 18.6349 23.0248 20.5003 23.0248C22.3657 23.0248 23.8779 21.4389 23.8779 19.4825C23.8779 17.526 22.3657 15.9401 20.5003 15.9401Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="textBox-title">title</div>
            <div className="textBox-contents">contents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
