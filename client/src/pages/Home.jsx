import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const phone = "919098442569";

    const handleWhatsApp = () => {
        const message = "Hello! I am interested in your catering services.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            <section className="hero">
                <motion.h1 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Crafting Memorable Events with Exquisite Catering
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    From intimate gatherings to grand celebrations, we bring culinary excellence and impeccable service to your doorstep.
                </motion.p>
                <motion.button 
                    className="order-btn" 
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Order Now via WhatsApp
                </motion.button>
            </section>
            
            <section className="services">
                <div className="card">
                    <img src="/assets/thali.jpg" alt="Premium Catering Service" />
                    <h2>Catering Services</h2>
                    <p>Full-service catering for weddings, corporate galas, and special events.</p>
                    <a href="/services">DISCOVER MORE</a>
                </div>

                <div className="card">
                    <img src="/assets/puri.jpg" alt="Puri Sabzi Plate" />
                    <h2>Puri & Sabzi</h2>
                    <p>Crispy handmade puris served with aromatic, spicy potato curry—comfort in every bite.</p>
                    <a href="/services">VIEW DETAILS</a>
                </div>

                <div className="card">
                    <img src="/assets/southindian.jpg" alt="South Indian Thali" />
                    <h2>South Indian Delights</h2>
                    <p>Authentic flavors from the South, including dosas, idlis, and traditional thalis.</p>
                    <a href="/services">VIEW DETAILS</a>
                </div>
            </section>

            <section className="gallery">
                {['catering1.jpeg', 'catering2.jpg', 'catering3.jpg', 'catering4.jpeg', 'catering5.jpg', 'catering6.jpeg'].map((img, i) => (
                    <motion.img 
                        key={i}
                        src={`/assets/${img}`} 
                        alt={`Catering Event ${i+1}`} 
                        whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                    />
                ))}
            </section>
        </motion.div>
    );
};

export default Home;
