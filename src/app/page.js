import Hero from "../../components/Hero";
import AppsSlider from "../../components/AppsSlider";
import Projects from "../../components/Projects";
import AboutMe from "../../components/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />
      <AppsSlider />
      <Projects />
      <AboutMe />
    </main>
  );
}
