import TextCard from "@/components/TextCard";
import "@style/MainContentStyle.css";
import TopMainImg from "@/assets/TopMainImg";
import BottomMainImg from "@/assets/BottomMainImg";
const MainContent = () => {
  return (
    <main>
      <div style={{ width: "95%" }}>
        <div style={{ position: "relative", display: "flex", width: "100%" }}>
          <TopMainImg />
          <h2 style={{ position: "absolute", color: "white", left: "45%", top: "35%" }}>asdfasdfasfd</h2>
        </div>
        <div className="containerWrapper">
          <div className="cardContainer">
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
          </div>
        </div>
        <BottomMainImg />
      </div>
    </main>
  );
};

export default MainContent;
