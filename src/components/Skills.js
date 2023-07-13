import webd from "../assets/img/webd.png";
import meter2 from "../assets/img/cpp.png";
import meter4 from "../assets/img/html.png";
import meter3 from "../assets/img/python.png";
import meter5 from "../assets/img/react.png";
import meter6 from "../assets/img/nodejs.png";
import meter7 from "../assets/img/bootstrap.png";
import { HashLink } from "react-router-hash-link";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <HashLink to="#skills">
                <button className="vvd">
                  <span>skills</span>
                </button>
              </HashLink> */}
              <h2>Skills</h2>
              <p style={{ fontSize: "15px", textAlign: "left", marginBottom:"100px"}}>
                As a Computer Science student, I have honed my skills in popular
                programming languages like C, C++, Python, and Java. I am
                passionate about web design, specializing in technologies such
                as ReactJS, Node.js, Bootstrap, and MongoDB. In addition to my
                programming skills,I am adept at problem-solving and critical
                thinking, allowing me to analyze complex problems and devise
                innovative solutions. With a meticulous research approach, I
                acquire a deep understanding of subjects, while my excellent
                communication skills foster effective collaboration with team
                members.
              </p>
          

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>C/C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={webd} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Html CSS Js</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
