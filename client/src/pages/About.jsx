import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section 
            className="content-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <h1>Our Story</h1>
            <p>Founded in 2015, Vaishnavi Caterers has been at the forefront of providing authentic and high-quality catering services. We believe that every event is unique and deserves a menu that reflects its spirit.</p>
            <p>Our team of expert chefs specializes in various cuisines, ensuring that every dish we serve is a masterpiece of flavor and presentation.</p>
            <p>Whether it's a corporate lunch, a grand wedding, or an intimate family gathering, we are committed to making your event unforgettable with our culinary excellence.</p>
        </motion.section>
    );
};

export default About;
