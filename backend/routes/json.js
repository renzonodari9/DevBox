const express = require('express');
const router = express.Router();

router.post('/format', (req, res) => {
  try {
    const { json } = req.body;

    if (!json) {
      return res.status(400).json({ error: 'JSON vacío' });
    }

    const parsed = JSON.parse(json);
    const formatted = JSON.stringify(parsed, null, 2);

    res.json({ success: true, formatted });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post('/validate', (req, res) => {
  try {
    const { json } = req.body;

    if (!json) {
      return res.status(400).json({ valid: false, error: 'JSON vacío' });
    }

    JSON.parse(json);
    res.json({ valid: true });
  } catch (error) {
    res.json({ valid: false, error: error.message });
  }
});

module.exports = router;
