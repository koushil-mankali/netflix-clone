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
        <h1
          style={{
            "font-size": "3rem",
            "background-color": "white",
            color: "red",
          }}
        >
          NOTE: This Project is just for EDUCATIONAL PURPOSE, Its doesnt provide
          any service or netflix content, this project is just react js practice
          project, it only contains 1 page, and doesnt contain any content of
          netflix.
        </h1>
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
