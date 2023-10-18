const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.server_port || 3001; // Use the environment variable or default to 3001
app.use(express.json());
app.use(cors());

// Import and use the route files
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use('/', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', newsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
