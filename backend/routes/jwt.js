const express = require('express');
const router = express.Router();

router.post('/decode', (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token vacío' });
    }

    const parts = token.split('.');

    if (parts.length !== 3) {
      return res.status(400).json({ error: 'JWT inválido: debe tener 3 partes' });
    }

    // Función para decodificar base64url (formato usado en JWT)
    const decodeBase64Url = (str) => {
      // Reemplazar caracteres base64url con base64 estándar
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      // Agregar padding si es necesario
      while (base64.length % 4) {
        base64 += '=';
      }
      return Buffer.from(base64, 'base64').toString();
    };

    const header = JSON.parse(decodeBase64Url(parts[0]));
    const payload = JSON.parse(decodeBase64Url(parts[1]));

    let expiration = null;
    if (payload.exp) {
      const date = new Date(payload.exp * 1000);
      expiration = {
        timestamp: payload.exp,
        date: date.toISOString(),
        isValid: date > new Date()
      };
    }

    res.json({
      success: true,
      header,
      payload,
      expiration
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
