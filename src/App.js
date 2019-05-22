import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";
import ImageOne from "./assets/img/newsapp.png";
import ImageTwo from "./assets/img/github.png";
import ImageThree from "./assets/img/03.jpg";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <SectionOne image={ImageOne} />
      <SectionTwo image={ImageTwo} />
      {/* <SectionThree image={ImageThree} /> */}
      <Footer />
    </div>
  );
}

export default App;
