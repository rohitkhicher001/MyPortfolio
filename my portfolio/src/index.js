import React from "react";
import { render } from "react-dom";

const Styles = {
  flexbox: {
    margin: "20px auto"
  },
  header: {
    textAlign: "center",
    color: "white"
  },
  glass: {
    background: "rgb(255, 255, 255, 0.3)",
    margin: "50px auto",
    borderRadius: "20px",
    filter: "blur(1px)",
    webkitFilter: "blur(0px)",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    color: "white"
  },
  titleSpacing: {
    marginTop: "0.5rem",
    marginBottom: "0.4rem",
    fontSize: "1.6rem"
  },
  contentSpacing: {
    padding: "0px 5px 20px 5px"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark pt-3">
        <Header />
        <div style={Styles.flexbox} className="container row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Card4 />
            <Card5 />
            <Card6 />
          </div>
        </div>
      </div>
    );
  }
}
function Header() {
  return (
    <div style={Styles.header} className="mt-4">
      <h3>Welcome To My Portfolio</h3>
    </div>
  );
}
function Card1() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>About</div>
      <div style={Styles.contentSpacing}>
        <div>Rohit Kumar</div>
        <div>Sirsa, Haryana</div>
        <div>rohitkhicher001@gmail.com</div>
        <div>
          <a
            style={Styles.link}
            href="https://github.com/rohitkhicher001"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/rohitkhicher001
          </a>
        </div>
      </div>
    </div>
  );
}
function Card2() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>Education</div>
      <div style={Styles.contentSpacing}>
        <div>
          <div>XII - Rajat VidyaPeeth Senior Secondary School</div>
          <div>2017-2019</div>
          <div>84.6%</div>
        </div>
        <div className="m-1">
          <div>Vellore Institute of Technology, Bhopal</div>
          <div>B.tech Computer Science</div>
          <div>2019-2023</div>
          <div>7.6 CGPA</div>
        </div>
      </div>
    </div>
  );
}
function Card3() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>Skills</div>
      <div style={Styles.contentSpacing} className="row">
        <div className="col-6">
          <div className="m-1">HTML5</div>
          <div className="m-1">CSS3</div>
          <div className="m-1">Bootstrap</div>
          <div className="m-1">Javascript</div>
        </div>
        <div className="col-6">
          <div className="m-1">MySql</div>
          <div className="m-1">ReactJS</div>
          <div className="m-1">C++</div>
        </div>
      </div>
    </div>
  );
}
function Card4() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>Internships</div>
      <div style={Styles.contentSpacing}>
        <div className="m-2">Multidigi Hub (Jan 2021-Mar 2021)</div>
        <div className="m-2">Cisco-Techs (Oct 2021-Jan 2022)</div>
        <div className="m-2">KrishMonte (Apr 2022-Jul 2022)</div>
      </div>
    </div>
  );
}
function Card5() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>Projects</div>
      <div style={Styles.contentSpacing}>
        <div className="m-2">Home workout android application</div>
        <div className="m-2">Portfolio generator</div>
        <div className="m-2">Fundraiser Social Media App</div>
        <div className="m-2">Tinder Clone</div>
        <div className="m-2">E-commerce Website</div>
      </div>
    </div>
  );
}
function Card6() {
  return (
    <div style={Styles.glass} className="container mt-4">
      <div style={Styles.titleSpacing}>Other Interests</div>
      <div style={Styles.contentSpacing}>
        <div className="m-1">Passionate about Volleyball</div>
        <div className="m-1">Reading Books</div>
        <div className="m-1">K-Drama and Anime</div>
        <div className="m-1">Providing online education</div>
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));
