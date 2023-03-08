import "./App.css";
import request from "./resources/requestLinks";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";

let App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <Row
          title={"Netflix Clone Originals"}
          fetchURL={request.noriginalsTMBD}
          bigRow
        />
        <Row title={"Trending Now"} fetchURL={request.trendingTMBD} />
        <Row title={"Top Rated"} fetchURL={request.topratedTMBD} />
        <Row title={"Action Movies"} fetchURL={request.actionmoviesTMBD} />
        <Row title={"Comedy Movies"} fetchURL={request.comedymoviesTMBD} />
        <Row title={"Horror Movies"} fetchURL={request.horrormoviesTMBD} />
        <Row title={"Documentaries"} fetchURL={request.documentariesTMBD} />
        <Footer />
      </div>
    </>
  );
};

export default App;
