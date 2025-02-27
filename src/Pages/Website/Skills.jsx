/* eslint-disable react/no-unescaped-entities */
// const Skills = () => {

//       const skills_tech = [
//         ["HTML5", "CSS3", "JavaScript", "Bootstrap" , "Tailwind CSS"],
//         [ "React.js", "jQuery",  "Firebase", "Git", "Github"],
//         [  "Node.js", "Express.js" , "MongoDB" , "Next.js" , "Docker"],
//         [ "Redis", "Redux", "Next.ui", "Style Components", "Figma"]
//       ];
    
    

//     const skills = [
//       {
//         title: "Web Design",
//         description:
//           "I love designs and it's the first step before creating any website as I can give layout to my imagination."
//       },
//       {
//         title: "Web Development",
//         description:
//           "I am a Full Stack Web Developer (MERN) and have quite some experience in it as well."
//       },
//       {
//         title: "Problem Solving",
//         description:
//           "I love solving problems whether programming problems or real-life problems."
//       }
//     ];
  
//     return (
//         <>
//       <section className="py-12 bg-white text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">SKILLS</h2>
//         <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
//               >
//                 <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                   {skill.title}
//                 </h3>
//                 <p className="text-gray-600">{skill.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section  className="py-12 bg-gray-100 text-center">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
//         Tech I'm Familiar With
//       </h2>
//       <div className="w-16 h-1 bg-gray-600 mx-auto mb-8"></div>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
//           {skills_tech.map((column, index) => (
//             <ul key={index} className="space-y-3 text-lg">
//               {column.map((skill, i) => (
//                 <li key={i} className="hover:text-gray-900 transition-all">{skill}</li>
//               ))}
//             </ul>
//           ))}
//         </div>
//       </div>
//     </section>
//       </>
//     );
//   };
  
//   export default Skills;
  

import { motion } from "framer-motion";

const Skills = () => {
  const skills_tech = [
    ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
    ["React.js", "jQuery", "Firebase", "Git", "Github"],
    ["Node.js", "Express.js", "MongoDB", "Next.js", "Docker"],
    ["Redis", "Redux", "Next.ui", "Styled Components", "Figma"]
  ];

  const skills = [
    {
      title: "Web Design",
      description:
        "Crafting visually stunning and highly functional web designs that showcase your unique brand and expertise with a seamless user experience."
    },
    {
      title: "Full Stack Development",
      description:
        "Passionate Full Stack MERN Developer skilled in building scalable web applications with React, Next.js, Node.js, Express, and MongoDB. Experienced in microservices architecture, state management, and modern UI/UX design."
    },
    {
      title: "Problem Solving",
      description:
        "Passionate problem solver with a knack for breaking down complex challenges into efficient, scalable solutions."
    }
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-12 bg-gray-100  text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SKILLS
        </motion.h2>
        <motion.div
          className="w-[200px] h-1 bg-black mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 bg-gray-100 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech I'm Familiar With
        </motion.h2>
        <motion.div
          className="w-[380px] h-1 bg-gray-600 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 text-gray-700">
            {skills_tech.map((column, index) => (
              <ul key={index} className="space-y-3 text-lg">
                {column.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="hover:text-gray-900 transition-all"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
