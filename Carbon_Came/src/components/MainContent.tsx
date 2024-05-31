import "@style/MainContentStyle.css";

const MainContent = () => {
  return (
    <main>
      <section id="what-is-bitcoin">
        <div className="container">
          <h2>What is Bitcoin?</h2>
          <p>Bitcoin is an innovative payment network and a new kind of money.</p>
        </div>
      </section>
      <section id="how-it-works">
        <div className="container">
          <h2>How it Works</h2>
          <p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks.</p>
        </div>
      </section>
      <section id="get-started">
        <div className="container">
          <h2>Get Started with Bitcoin</h2>
          <p>Getting started with Bitcoin is easy. Here are some steps to get you started.</p>
        </div>
      </section>
      <section id="resources">
        <div className="container">
          <h2>Resources</h2>
          <p>Here are some resources to help you learn more about Bitcoin.</p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
