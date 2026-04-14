import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Booking = () => {
    const [formData, setFormData] = useState({
        eventType: 'Wedding',
        guestCount: '',
        eventDate: '',
        requirements: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        setStatus('Processing...');
        
        try {
            // 1. Send to Backend
            const response = await axios.post('/api/booking', formData);
            
            // 2. Fallback to WhatsApp for personal communication
            const phone = "919098442569";
            const message = `*New Catering Inquiry*\n\n*Event Type:* ${formData.eventType}\n*Guests:* ${formData.guestCount}\n*Date:* ${formData.eventDate}\n*Requirements:* ${formData.requirements}`;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            
            setStatus('Redirecting to WhatsApp...');
            setTimeout(() => {
                window.open(url, "_blank");
                setStatus('Inquiry Sent Successfully!');
            }, 1000);

        } catch (error) {
            console.error('Error submitting booking:', error);
            setStatus('Error sending inquiry. Please try again.');
        }
    };

    return (
        <motion.section 
            className="booking-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <h1>Reserve Your Date</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', textAlign: 'center', maxWidth: '500px' }}>
                Indulge in a culinary journey tailored for your special occasion. Fill out the form below to begin planning your exquisite event.
            </p>
            <form className="booking-form" onSubmit={handleBooking}>
                <div className="form-group">
                    <label>Event Type</label>
                    <select id="eventType" value={formData.eventType} onChange={handleChange}>
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Private Party</option>
                        <option>Birthday</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Approx. Guest Count</label>
                    <input type="number" id="guestCount" value={formData.guestCount} onChange={handleChange} placeholder="e.g. 100" required />
                </div>
                <div className="form-group">
                    <label>Event Date</label>
                    <input type="date" id="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Special Requirements</label>
                    <textarea id="requirements" rows="4" value={formData.requirements} onChange={handleChange} placeholder="Any dietary restrictions or specific dishes?"></textarea>
                </div>
                <button type="submit" className="submit-btn">{status || 'Request Quote via WhatsApp'}</button>
            </form>
        </motion.section>
    );
};

export default Booking;
