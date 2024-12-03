import Header from "../components/Header";
import Hero from "../components/Hero";
import AppsSlider from "../components/AppsSlider";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24">
        <Hero />
        <AppsSlider />
        <Projects />
        <AboutMe />
      </main>
      <Modal />
      <Footer />
    </>
  );
}
