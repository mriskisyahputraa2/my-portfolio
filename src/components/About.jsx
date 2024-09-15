import { ABOUT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="flex flex-col max-w-4xl gap-12 pt-12" id="about">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl lg:text-4xl"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {ABOUT.map((about, index) => (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              key={index}
              className="mb-4 text-lg lg:text-xl"
            >
              {about}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </>
  );
}
