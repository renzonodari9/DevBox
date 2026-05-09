const express = require('express');
const cors = require('cors');
const jsonRoutes = require('./routes/json');
const jwtRoutes = require('./routes/jwt');
const base64Routes = require('./routes/base64');
const apiTesterRoutes = require('./routes/apiTester');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/json', jsonRoutes);
app.use('/api/jwt', jwtRoutes);
app.use('/api/base64', base64Routes);
app.use('/api/test', apiTesterRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'DevBox API is running' });
});

app.listen(PORT, () => {
  console.log(`DevBox Backend running on http://localhost:${PORT}`);
});
