import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter60 from "../assets/img/meter60.svg";
import meter50 from "../assets/img/meter50.svg";
import meter65 from "../assets/img/meter65.svg";
import meter70 from "../assets/img/meter70.svg";
import meter75 from "../assets/img/meter75.svg";
import meter80 from "../assets/img/meter80.svg";
import meter85 from "../assets/img/meter85.svg";
import meter90 from "../assets/img/meter90.svg";
import meter95 from "../assets/img/meter95.svg";

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
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Versatile skill set spanning Web Development, Android Development, <br></br>Data Science, Cybersecurity,dedicated to leveraging technology to solve <br></br>complex problems and deliver innovative solutions</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter85} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="Image" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                                <img src={meter60} alt="Image" />
                                <h5>CyberSecurity</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="Image" />
                                <h5>Kotlin</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="Image" />
                                <h5>Blockchain</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>MatLab</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>R programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Numpy/Pandas</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Numpy/Pandas</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
