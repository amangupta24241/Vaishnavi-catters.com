import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <motion.section 
            className="services-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Exquisite Menus</h1>
            <div className="menu-grid">
                {[
                    { title: "Traditional Thali", items: ["Assorted Indian Breads", "Daal Makhani & Paneer Tikka", "Seasonal Vegetable Subzi", "Jeera Rice & Raita", "Gulab Jamun"] },
                    { title: "South Indian Special", items: ["Masala Dosa & Idli", "Sambhar & Coconut Chutney", "Lemon Rice", "Vada & Upma", "Payasam"] },
                    { title: "Party Snacks", items: ["Puri & Sabzi", "Samosas & Crispy Pakoras", "Paneer Finger Food", "Assorted Mocktails"] }
                ].map((menu, i) => (
                    <motion.div 
                        key={i} 
                        className="menu-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <h2>{menu.title}</h2>
                        <ul>
                            {menu.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Services;
