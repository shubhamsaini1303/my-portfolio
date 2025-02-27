
import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Accedien Refer Page",
    description:
      "Developed a referral page for Accedien, allowing users to generate and share unique referral links. The system tracks referrals, validates users, and provides rewards based on successful referrals.",
    technologies: ["React.js", "Node.js", "Express.js", "Prisma" , "MySQL" , "React Resend", "Tailwind CSS"],
    videoUrl: "/Videos/accredian full functional refer to friend video.mp4"
  },
  {
    title: "BanterBox Chat App",
    description:
      "Developed a real-time chat application called BanterBox. Integrated WebSocket for instant messaging, user authentication with Firebase, and a sleek UI with Tailwind CSS. Supports text, image, and emoji messaging.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    videoUrl: "/Videos/chat-app full feactured with authentication1.mp4"
  },
  {
    title: "Panchayat Cafe",
    description:
      "Designed and developed a modern food ordering website for Panchayat Cafe. Implemented authentication, menu management, and cart functionality with Redux. Ensured a seamless user experience with Next.js and Tailwind CSS.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    videoUrl: "/Videos/full functional food delivery ecommerce website1.mp4"
  },
  {
    title: "Employee Management System",
    description:
      "Built an Employee Management System to streamline HR operations. Features include employee records management, attendance tracking, payroll processing, and role-based access control. Developed using the MERN stack with secure authentication.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT Authentication"],
    imageUrl: "/Images/employee_management_preview.jpg",
    videoUrl: "/Videos/employe management dashboard1.mp4"
  },
  {
        title: "E-commerce Website with Firebase & Admin Dashboard",
        description:
          "Developed a feature-rich e-commerce platform integrated with Firebase authentication, product management, and an admin dashboard for order and inventory control.",
        technologies: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        videoUrl:"/Videos/ecommerce website with firebase authentication and admin dashboard1.mp4"
      },
      {
        title: "Task Management System with OTP Verification",
        description:
          "Built a task management system allowing users to create, assign, and track tasks with OTP-based authentication for added security.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Firebase OTP"],
        videoUrl:"/Videos/task managent with otp verification1.mp4"
      },
      {
        title: " Clone Of Gemplay Website",
        description:
          "Designed a pixel-perfect UI clone of the Gemplay website, ensuring responsiveness and performance using modern frontend technologies.",
        technologies: ["React.js", "Styled Components", "Tailwind CSS", "Framer Motion" , "Aceternity ui"],
        videoUrl:"/Videos/ui clone of gemlay website1.mp4"
      },
      {
        title: "UI Part Of Gym Fluncer",
        description:
          "Created an engaging UI for GymFluncer, focusing on fitness-themed animations, dark mode, and an intuitive layout.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Next.js" , "Aceternity ui" , "Shadcn/ui"],
        videoUrl:"/Videos/ui part of gym fluncer1.mp4"
      },
];

const Projects = () => {
  return (
    <motion.div 
      className="bg-gray-100 min-h-screen flex flex-col items-center p-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wider mb-2 mt-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hands-On Projects
      </motion.h2>
      <motion.h2
        className="text-3xl md:text-2xl font-bold text-gray-00 uppercase tracking-wider mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Live Video Demo
      </motion.h2>

      {/* Project Cards */}
      {projects.map((project, index) => {
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        };

        const handleMouseLeave = () => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        };

        const handleVideoClick = () => {
          if (videoRef.current) {
            videoRef.current.controls = true;
          }
        };

        return (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 max-w-6xl w-full flex flex-col md:flex-row items-center mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Left Side - Project Details */}
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h3 className="text-3xl font-bold text-blue-900">{project.title}</h3>
              <p className="text-gray-700 mt-4">{project.description}</p>

              {/* Skills Section */}
              <motion.div
                className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 text-blue-800 font-semibold py-1 px-3 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Video */}
            <motion.div 
              className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <video
                ref={videoRef}
                className="md:w-full sm:w-[200px] h-[300px] object-cover rounded-lg shadow-lg"
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleVideoClick}
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
