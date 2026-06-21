import { motion } from 'framer-motion';

const FadeInUp = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Starts faded out and 40px down
      whileInView={{ opacity: 1, y: 0 }} // Smoothly floats up when it enters the screen
      viewport={{ once: true, margin: "-100px" }} // Triggers once per page load
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.215, 0.610, 0.355, 1.000] // A gorgeous, premium cubic-bezier ease-out
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;