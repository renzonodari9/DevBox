const express = require('express');
const router = express.Router();

router.post('/encode', (req, res) => {
  try {
    const { text } = req.body;

    if (text === undefined || text === null) {
      return res.status(400).json({ error: 'Texto vacío' });
    }

    const encoded = Buffer.from(text).toString('base64');
    res.json({ success: true, encoded });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post('/decode', (req, res) => {
  try {
    const { encoded } = req.body;

    if (!encoded) {
      return res.status(400).json({ error: 'Texto vacío' });
    }

    const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
    res.json({ success: true, decoded });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Base64 inválido' });
  }
});

module.exports = router;
