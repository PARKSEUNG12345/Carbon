import "@style/App.css";
import Header from "@components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
