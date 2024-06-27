import AboutMe from "./_components/AboutMe";
import Education from "./_components/Education";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
      <AboutMe/>
      <Education/>
      <Testimonials/>
    </main>
  );
}
