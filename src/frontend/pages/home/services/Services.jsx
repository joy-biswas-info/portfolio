import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./services.css";
import Counter from "./Counter.jsx";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Application Development",
    counter: 35,
  },
  {
    id: 1,
    img: "/service2.png",
    title: "Ecommerce Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service3.png",
    title: "Business Websites",
    counter: 23,
  },
  {
    id: 3,
    img: "/service4.png",
    title: "Wordpress Theme Customization",
    counter: 46,
  },
  {
    id: 3,
    img: "/service5.png",
    title: "Wordpress Theme Development",
    counter: 46,
  },
  {
    id: 3,
    img: "/service6.png",
    title: "API Integration",
    counter: 46,
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.h1 variants={textVariants} className="sTitle">
          How do I help?
        </motion.h1>
        <motion.div
          className="service-grid"
          variants={listVariants}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <img src={service.img} alt={service.title} />
              </div>
              <div>
                <h3>{service.title}</h3>
                <div className="counterList">
                  <Counter from={0} to={service.counter} text="Projects Completed" />
                </div>{" "}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
