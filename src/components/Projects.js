import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import video3 from "../assets/img/video3.mp4";
import video2 from "../assets/img/video2.mp4";
import video1 from "../assets/img/video1.mp4";
import video4 from "../assets/img/video4.mp4";
import video5 from "../assets/img/video5.mp4";
import video6 from "../assets/img/video6.mp4";


import face from "../assets/img/face.png";



import meter3 from "../assets/img/python.png";

import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },

      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2> My Projects</h2>
                  <p>Have a look at some of them!</p>
                  <div class="carousel-container">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }} // Adjust the maxHeight as desired
                          controls
                          muted
                        >
                          {" "}
                          <source src={video1} type="video/mp4" />
                        </video>
                        <h5>Ghost Chat App </h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          This is a real-time chat application built using
                          ReactJS for the frontend design and Node.js for the
                          backend development. Upon creating an account and
                          logging in, two users can engage in seamless
                          communication using this application. Feel free to
                          give it a try and experience the functionality
                          firsthand:
                          <a href="https://ghostchatapp.netlify.app/">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>

                      <div className="item">
                        <img src={face}></img>

                        <h5>
                          Multiple Face-Recognition for attendance Marking
                        </h5>
                        <p style={{ fontSize: "14px", textAlign: "left" }}>
                          This is a team project developed to facilitate
                          attendance marking for multiple students
                          simultaneously in a classroom setting. The project
                          involved a collaboration of four members. We utilized
                          deep learning techniques, specifically FaceNet and
                          MTCNN, as part of the technology stack. The displayed
                          image showcases the successful outcome of running the
                          model, accurately recognizing the faces and recording
                          the attendance in the corresponding spreadsheet.{" "}
                        </p>
                      </div>
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }}
                          controls
                          muted
                        >
                          <source src={video3} type="video/mp4" />
                        </video>
                        <h5>Tic-Tac-Toe using react</h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          {" "}
                          This is a game created using ReactJs. I have created
                          this game while learning React, as part of my journey
                          to explore and master the framework. By building this
                          game, I was able to apply the concepts and principles
                          I learned in React and gain hands-on experience in
                          developing interactive web applications. Play it:
                          <a href="https://ticktacktoe-alpha.vercel.app/">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }}
                          controls
                        >
                          <source src={video4} type="video/mp4" />
                        </video>
                        <h5>Decentra a web3 space designed to host Courses </h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          This project was developed as part of a team during a
                          hackathon. The platform offers a seamless experience
                          for both students and educators. Students have the
                          ability to purchase courses using Ethereum (ETH),
                          while educators can efficiently manage these courses
                          through a convenient single dashboard. My contribution
                          to the project involved frontend design using ReactJS,
                          ensuring an intuitive and user-friendly interface.
                          Give it a try:
                          <a href="https://lnkd.in/gEvBD4zZ">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }}
                          controls
                          muted
                        >
                          <source src={video2} type="video/mp4" />
                        </video>
                        <h5>Work Manager and Scheduler</h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          During the initial phase of my journey in learning
                          JavaScript, I built this website as a practical
                          exercise to gain hands-on experience with the
                          language. It served as a platform for me to apply my
                          knowledge of JavaScript and experiment with its
                          powerful capabilities in creating dynamic and
                          interactive web pages. check it:{" "}
                          <a href="https://shristi216.github.io/task3_todo_list/">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }}
                          controls
                          muted
                        >
                          <source src={video5} type="video/mp4" />
                        </video>
                        <h5>Portfolio using html css and js</h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          As part of my internship project, I developed this
                          application using HTML, CSS, and JavaScript. It
                          provided me with an opportunity to gain in-depth
                          knowledge and hands-on experience with media queries,
                          allowing me to create a responsive and visually
                          appealing design. This project enhanced my skills in
                          front-end development and honed my ability to adapt to
                          different screen sizes effectively. check it:{" "}
                          <a href="https://shristi216.github.io/Oasis_task2/">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>
                      <div className="item">
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "505px",
                            height: "auto",
                            maxHeight: "440px",
                          }}
                          controls
                          muted
                        >
                          <source src={video6} type="video/mp4" />
                        </video>
                        <h5>Fashion Store</h5>
                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                          This website was created using HTML, CSS, and
                          JavaScript during my learning phase. HTML structured
                          the web pages and displayed content, while CSS
                          enhanced the visual appearance. JavaScript added
                          interactivity and dynamic behavior. check it:{" "}
                          <a href="https://shristi216.github.io/Oasis_task1/">
                            Click Here!
                          </a>{" "}
                        </p>
                      </div>
                    </Carousel>
                  </div>
                  {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}

                  {/* <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    > */}

                  {/* <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  {/* </Tab.Content> */}
                  {/* </Tab.Container> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
