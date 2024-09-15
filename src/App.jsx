import About from "./components/About";
import ContactForm from "./components/ContactForm";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  return (
    <>
      <div className="relative h-full overflow-y-hidden antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          {/* navbar */}
          <Navbar />

          {/* hero section */}
          <Hero />

          {/* Project */}
          <Projects />

          {/* About */}
          <About />

          {/* Skill */}
          <Skills />

          {/* Work Experience */}
          <WorkExperience />

          {/* Educations Sections */}
          <EducationSection />

          {/* Contact Form */}
          <ContactForm />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
