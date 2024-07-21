import Footer from "@/components/Footer";
import Header from "@/components/Header";
const contentBoxText = [
  {
    h3: "보다 쉬운 모바일 결제",
    p: '모바일로 비트코인 결제를 하실 때에는 "스캔-앤-페이" 두 단계만 거치면 됩니다. 카드를 긁거나, 핀 코드를 입력하거나, 사인을 할 필요가 없습니다. 지불을 받으려면 모바일폰의 비트코인 지갑 앱에서 QR 코드를 꺼내어 상대방이 그 코드를 스캔하거나 두 사용자의 모바일폰을 (NFC 무선 기술을 사용하여) 서로 맞대게 하기만 하면 됩니다.',
  },
  {
    h3: "당신의 돈에 대한 보안과 통제",
    p: "비트코인 거래는 군사 수준의 암호학에 의해 보호됩니다. 누구도 당신에게 지불을 부담시키거나 당신을 사칭해 지불을 할 수 없습니다. 당신이 지갑을 보호하는데 필요한 과정들을 지키는 한, 비트코인은 당신이 소유한 돈에 대해 높은 수준의 통제권과 많은 종류의 불법 행위에 대해 준비된 보안을 제공합니다.",
  },
  {
    h3: "언제 어디서나 사용 가능한",
    p: "이메일처럼 같은 소프트웨어나 동일한 서비스 공급자를 사용해야 할 필요가 없습니다. 취향에 맞는 클라이언트와 앱을 골라 사용하세요. 비트코인은 같은 공개 기술을 사용하기 때문에 모든 클라이언트와 앱들이 서로 호환 가능합니다. 비트코인 네트워크는 공휴일에도 쉬지 않습니다!",
  },
  {
    h3: "보다 빠른 국제 결제",
    p: "비트코인은 단 10분이면 아프리카에서 캐나다까지 송금이 가능합니다. 은행처럼 처리 과정이 더디거나, 수수료를 많이 부과하거나, 송금이 중단되는 일이 없습니다. 다른 나라에 있는 가족에게도 이웃에게 지불하는 것과 같은 방법으로 지불이 이루어지기 때문입니다.",
  },
  {
    h3: "무료 또는 낮은 수수료",
    p: "비트코인은 사용자가 아주 저렴한 가격에 거래를 주고 받을 수 있게 해줍니다. 액수가 매우 적은 거래와 같이 특별한 경우를 제외하고는 수수료가 붙지 않습니다. 하지만 자발적인 수수료를 지불하는 것은 보다 빠른 결제확인을 돕고 또 비트코인 네트워크를 운영하는 사람들에게 큰 도움이 됩니다.",
  },
  {
    h3: "당신의 신원 보호",
    p: " 비트코인은 신용카드와 같이 악의를 가진 이가 당신을 사칭하기 위해 훔칠 수 있는 번호같은 것이 없습니다. 현찰과 같이 당신의 신원을 밝히지 않고도 지불결제가 가능합니다. 하지만 그러기 위해서는 비트코인 사용시 자신의 신원을 보호하는 방법을 잘 알아야 합니다.",
  },
];
const headerText = {
  headerText: "개인을 위한 CAME",
  bannerText: "비트코인은 매우 낮은 비용으로 돈을 교환할 수 있는 가장 간단한 방법입니다.",
};
const PersonalPage = () => {
  return (
    <>
      <Header HeaderText={headerText.headerText} BannerText={headerText.bannerText} />
      <div className="main">
        <div className="main-content">
          {contentBoxText.map((text, index) => (
            <div className="content-box" key={index}>
              <div className="icon">⚙️</div>
              <h3>{text.h3}</h3>
              <p>{text.p}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalPage;
