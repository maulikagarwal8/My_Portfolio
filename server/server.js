import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import contact from './routes/Contact.js';
dotenv.config({path: './.env' });
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({ 
  origin: process.env.FRONTEND_URL||'*',
  credentials:true,
  methods: ['GET', 'POST'],
 }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API running', time: new Date().toISOString() })
})

app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: "Server is awake and active!" });
});

app.use('/api/contact', contact);

app.get('/api/download/resume/pdf', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'Maulik_Agarwal_Resume.pdf')
  res.download(filePath, 'Maulik_Agarwal_Resume.pdf', (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ message: 'Failed to download PDF' })
    }
  })
})

app.get('/api/download/resume/docx', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'Maulik_Agarwal_Resume.docx')
  res.download(filePath, 'Maulik_Agarwal_Resume.docx', (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ message: 'Failed to download DOCX' })
    }
  })
})

const PORT = process.env.PORT || 5500

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message)
    console.error(err)
  });

export default app;


