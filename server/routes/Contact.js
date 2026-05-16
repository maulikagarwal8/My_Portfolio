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
    try{
      await sendContactEmail({name,email,message});
      res.json({ success: true, message: 'Contact stored and Email sent to owner!',contactId: contact._id })
    }
    catch (err) {
      console.error('Error sending email.', err)
      res.status(500).json({ error: 'Contact stored but Failed to send email to owner' })
    }
  }
  catch (err) {
    console.error('Failed to store contact.', err)
    res.status(500).json({ message: 'Failed to store contact' })
  }
});

export default router;