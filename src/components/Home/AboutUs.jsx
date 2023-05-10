import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./aboutUs.css";
import companyImage from "../../assets/img/about-1.png";
import image1 from "../../assets/img/mission.jpg";
import image2 from "../../assets/img/vision.jpg";
import image3 from "../../assets/img/value.jpg";


const AboutUs = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".aboutUs");
      const top = aboutSection.getBoundingClientRect().top;
      const height = aboutSection.offsetHeight;
      const bottom = top + height;

      if (top < window.innerHeight && bottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 5 } },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  

  return (
    <motion.section
      className="aboutUs"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="row">
          <motion.div className="col-lg-6" variants={textVariants}>
            <h2 className="section-heading">About Our Startup</h2>
            <p className="aboutUs-content">
              At our startup, we are passionate about empowering businesses with
              cutting-edge software solutions that enhance their operations,
              increase efficiency, and drive growth. Our team of experts
              specializes in web development, UX/UI design, and digital
              marketing, and we work collaboratively to deliver personalized
              solutions that are tailored to the unique needs of each client. We
              are committed to providing exceptional customer service and
              support, and building long-term relationships with our clients
              based on trust, transparency, and shared success.
              <br />
              <br />
              At the core of our values is a commitment to innovation,
              integrity, and social responsibility. We believe in pushing the
              boundaries of what's possible in our industry, staying ahead of
              the curve on industry trends and utilizing the latest technologies
              to provide our clients with the best possible solutions. We are
              dedicated to creating a culture of excellence, creativity, and
              continuous learning and improvement that inspires our clients,
              partners, and employees. Our mission is to help businesses achieve
              their goals, and to make a positive impact on the world through
              the power of technology.
            
            </p>
          </motion.div>
          <motion.div className="col-lg-6" variants={imageVariants}>
          <img src={companyImage} alt="Company Image" className="img-fluid" />
          </motion.div>
        </div>
      </div><br></br><br></br>
      <motion.div className="container" variants={imageContainerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <div className="row aboutUs-images">
  <div className="col-md-4">
    <motion.img src={image1} alt="Image 1" className="img-fluid" variants={imageVariants} />
  </div>
  <div className="col-md-4">
    <motion.img src={image2} alt="Image 2" className="img-fluid" variants={imageVariants} />
  </div>
  <div className="col-md-4">
    <motion.img src={image3} alt="Image 3" className="img-fluid" variants={imageVariants} />
  </div>
</div>

      </motion.div>
    </motion.section>
  );
};

export default AboutUs;

