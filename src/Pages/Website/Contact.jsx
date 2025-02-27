/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    { name: "Email", icon: <FaEnvelope />, link: "mailto:siddharthsaini1303@gmail.com" },
    { name: "Github", icon: <FaGithub />, link: "https://github.com/shubhamsaini1303" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shubham-saini-b97b80284/" },
    // { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT
      </motion.h2>
      <div className=" flex w-[200px] h-1 bg-white mx-auto mb-6"></div>
      <motion.p
        className="text-lg mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let's Connect
      </motion.p>
      <motion.p
        className="text-xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        DIGITALLY
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
          >
            {contact.icon}
            <span className="font-semibold">{contact.name}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
