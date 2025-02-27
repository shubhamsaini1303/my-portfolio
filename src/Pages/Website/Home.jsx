/* eslint-disable react/no-unescaped-entities */

import { HeroSection } from "../../Style/Style";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import ExperienceSection from "./Experience";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>

<HeroSection>
  <div className=" py-8">
    <div
      className="text-center mx-auto w-[90%] lg:w-[900px] h-auto"
      data-aos="fade-up"
    >
      <h1 className="text-[40px] lg:text-[85px]" style={{ color: "#8f989b" }}>
        Full Stack Web Developer
      </h1>
      <p className="text-white">
      Hi, I'm Shubham Saini, a MERN Stack Developer with 1+ year of experience in building scalable and high-performance web applications. I specialize in React.js, Next.js, Node.js, MongoDB, and microservices architecture. I have worked on e-commerce platforms, chat applications, and social media clones. My expertise includes:
      </p>

      <p className="text-white mt-4">
      🔹 Frontend: React.js, Next.js, Tailwind CSS, Acernity UI, Styled Components  <br/>
🔹 Backend: Node.js, Express.js, MongoDB, Redis, Firebase <br/>
🔹 Other Skills: Docker, Prisma , Microservices, Authentication (JWT, Firebase, OAuth) <br/>
🔹 Deployment: Vercel, Render, AWS, Netlify
      </p>
<p className="text-white mt-4">
      I am passionate about developing high-quality applications and ensuring smooth user experience. Let's build something great together!  
</p>
      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mt-6">
        {/* Resume Button */}
        <a
          href="/My-Resume.pdf" // Update with actual resume file path
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Resume
        </a>

        {/* Skills Button */}
        <Link to={"/skills"}
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition"
        >
          Skills
        </Link>
      </div>
    </div>
  </div>
</HeroSection>

      {/* Education  */}
      <Education/>

      {/* Skills */}
      <Skills />

      {/* Projects */}
    <Projects />

    {/* Experience  */}
    <ExperienceSection />
    {/* Contact */}
    <Contact />
    </>
  );
};

export default Home;
