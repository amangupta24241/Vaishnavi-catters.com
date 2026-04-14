import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'server is running', timestamp: new Date() });
});

// Booking inquiry endpoint
app.post('/api/booking', (req, res) => {
    const { eventType, guestCount, eventDate, requirements } = req.body;
    
    console.log('Received new booking inquiry:', { eventType, guestCount, eventDate, requirements });
    
    // In a real app, you might save this to a database or send an email here.
    res.status(201).json({ 
        message: 'Inquiry received successfully!',
        data: { eventType, eventDate }
    });
});

// Contact inquiry endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log('Received new contact message:', { name, email, message });
    
    res.status(201).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
