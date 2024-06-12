import TextCard from "@/components/TextCard";
import "@style/MainContentStyle.css";
import TopMainImg from "@/assets/TopMainImg";
import BottomMainImg from "@/assets/BottomMainImg";
const MainContent = () => {
  return (
    <main>
      <TopMainImg />
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
    </main>
  );
};

export default MainContent;
