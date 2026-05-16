import {Router} from 'express';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../models/Mailer.js';
const router  = Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'Required fields are missing.' });

  try{
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Contact stored', contactId: contact._id });
    try{
      await sendContactEmail({name,email,message});
      res.json({ success: true, message: 'Email sent to owner!' })
    }
    catch (err) {
      console.error('Error sending email.', err)
      res.status(500).json({ error: 'Failed to send email to owner' })
    }
  }
  catch (err) {
    console.error('Failed to store contact.', err)
    res.status(500).json({ message: 'Failed to store contact' })
  }
});

export default router;