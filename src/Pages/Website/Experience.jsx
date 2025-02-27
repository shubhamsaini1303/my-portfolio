import { motion } from "framer-motion";


const projectsData = [
  {
    name: "Accedien Refer Page",
    description:
      "Developed a referral page for Accedien, allowing users to generate and share unique referral links. The system tracks referrals, validates users, and provides rewards based on successful referrals.",
    technologies: ["React.js", "Node.js","Prisma" , "MySQL", "Express.js", "React Resend", "Tailwind CSS"],
    link: "https://accredian-frontend-task-kappa-one.vercel.app/",
  },
  {
    name: "Panchayat Cafe Food Delivery",
    description:
      "Built a full-stack food delivery platform with MERN stack, real-time order tracking, and shop partnerships.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS" , "Redux Toolkit"],
    link: "https://panchayat-cafe.vercel.app/",
  },
  {
    name: "Task Management",
    description:
      "This Task Management System is built using React, Redux Toolkit, Framer Motion, and Tailwind CSS. It allows users to add, delete, and toggle tasks with smooth animations for an interactive experience",
    technologies: ["React.js", "OTPVERIFICATION", "Node.js", "Express.js" , "MongoDB" ],
    link: "https://task-management-rho-lac.vercel.app/",
  },
  {
    name: "Gym Fluncer UI/UX Design",
    description:
      "This Gym Influencer UI is designed using React, Tailwind CSS, Framer Motion, and Next.js, providing a sleek, modern, and responsive interface.",
    technologies: ["MERN Stack", "Socket.io", "Cloudinary", "ShadCN UI"],
    link: "https://gymfluncer.vercel.app/",
  },
];

const ExperienceSection = () => {
  return (
    <div className="container mx-auto  px-4 py-10">
      {/* EXPERIENCE SECTION */}
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EXPERIENCE
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <h1 className="text-3xl bg-white rounded-lg p-2 text-center">Fresher</h1>

      </div>

      {/* PROJECTS SECTION */}
      <motion.h2
        className="text-4xl font-bold text-center mt-16 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HANDS-ON PROJECTS
      </motion.h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 p-4 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6  shadow-lg rounded-xl w-[350px] border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="mt-3 overflow-scroll">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 ml-4 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
