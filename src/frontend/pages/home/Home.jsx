import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import Navbar from "../../components/navbar/Navbar";

const Hero = lazy(() => import("./hero/Hero"));
const Services = lazy(() => import("./services/Services"));
// const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const Contact = lazy(() => import("./contact/Contact"));
const Skills = lazy(() => import("./skills/Skills"));

const Home = () => {
  return (
    <div className="container">
      <section id="home">
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <Navbar />
            <Hero />
          </LazyLoad>
        </Suspense>
      </section>
      <section id="services">
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <Services />
          </LazyLoad>
        </Suspense>
      </section>
      <section id="skills">
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <Skills />
          </LazyLoad>
        </Suspense>
      </section>
      {/* <Suspense fallback={"loading..."}>
        <LazyLoad id="portfolio" height={"600vh"} offset={-100}>
          <Portfolio />
        </LazyLoad>
      </Suspense> */}
      <section id="contact">
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <Contact />
          </LazyLoad>
        </Suspense>
      </section>{" "}
    </div>
  );
};

export default Home;
