const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/request', async (req, res) => {
  try {
    const { method, url, headers, body } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL requerida' });
    }

    const config = {
      method: method || 'GET',
      url,
      headers: headers || {},
      data: body || undefined,
      validateStatus: () => true
    };

    const startTime = Date.now();
    const response = await axios(config);
    const duration = Date.now() - startTime;

    res.json({
      success: true,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      data: response.data,
      duration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
