import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post('/api/contact', formData);
            setStatus('Message Sent Successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Error sending message.');
        }
    };

    return (
        <motion.div 
            className="contact-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="contact-info">
                <h1>Get in Touch</h1>
                <div className="info-item">
                    <h3>Address</h3>
                    <p>123 Gourmet Plaza, Celebration Street,<br/>Indore, Madhya Pradesh 452001</p>
                </div>
                <div className="info-item">
                    <h3>Phone</h3>
                    <p>+91 90984 42569</p>
                </div>
                <div className="info-item">
                    <h3>Email</h3>
                    <p>orders@vaishnavicaterers.com</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="submit-btn">{status || 'Send Message'}</button>
            </form>
        </motion.div>
    );
};

export default Contact;
