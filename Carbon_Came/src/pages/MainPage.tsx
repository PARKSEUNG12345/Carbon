import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@style/MainPage.css";
const headerText = {
  headerText: "CAME코인은 혁신적인 결제 네트워크이자 신종 화폐입니다.",
  bannerText: "CAME코인을 소개합니다.",
};
const MainPage = () => {
  return (
    <>
      <Header HeaderText={headerText.headerText} BannerText={headerText.bannerText} />
      <div className="main">
        <div className="main-content">
          <div className="content-box">
            <div className="icon">⚙️</div>
            <h3>가장 낮은 수수료</h3>
            <p>
              비트코인의 고도화된 암호화 보안은 비트코인이 매우 효율적이고 값싸게 비트코인 거래를 처리할 수 있게
              해줍니다. 당신은 거의 무료로 비트코인 네트워크를 통해 지불을 하거나 지불을 받을 수 있습니다. 대부분의
              경우, 엄밀하게 수수료가 요구되지는 않습니다. 하지만 빠른 거래 승인을 위해서 권장됩니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
