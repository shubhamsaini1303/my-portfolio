
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {/* Education Section */}
      <motion.section
        className="max-w-full w-full bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="md:text-6xl text-4xl font-extrabold text-gray-900 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          EDUCATION
          <span className="absolute top-1 left-1 text-gray-300 opacity-50">
            EDUCATION
          </span>
        </motion.h2>

        <motion.div
          className="mt-4 border-t-4 border-gray-900 w-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          className="mt-4 border-t-2 border-gray-900 w-32"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        ></motion.div>

        {/* Education Details */}
        {[  
          {
                  title: "Building an in-depth full-stack Blog project application using Nodejs, Express, React, and MongoDB",
                  school: "Udemy Online Course",
                  year: "2 Fab 2024",
                },
                 {
                  title: " Web Designing Course",
                  school: "Zeetron Networks Pvt. Ltd. India Information Technology And Services (IIHT JAIPUR)",
                  year: "1 Oct 2023 - 30 Nov 2023",
                },
          {
            title: "Bachelor's Degree in Biology",
            school: "University Of Rajasthan Jaipur",
            degree: "B.Sc",
            score: "60%",
            year: "2019 - 2022",
          },
          {
            title: "Senior Secondary , Rajasthan Board of Secondary Education",
            school: "12th Scored 70% in PCB",
            year: "2018",
          },
          {
            title: "Secondary , Rajasthan Board of Secondary Education",
            school: "10th Scored 71%",
            year: "2016",
          },
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900">{edu.title}</h3>
            <p className="text-gray-600 mt-2">{edu.school}</p>
            {edu.degree && <p className="text-gray-600">{edu.degree}</p>}
            {edu.score && <p className="text-gray-600">{edu.score}</p>}
            <p className="text-gray-900 font-semibold mt-2">{edu.year}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Education;
