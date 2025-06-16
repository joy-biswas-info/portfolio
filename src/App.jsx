import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import Navbar from "./components/navbar/Navbar";
const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
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
      </section>{" "}
      <Suspense fallback={"loading..."}>
        <LazyLoad id="portfolio" height={"600vh"} offset={-100}>
          <Portfolio />
        </LazyLoad>
      </Suspense>
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

export default App;
