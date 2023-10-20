const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.server_port || 3001; 
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', newsRoutes);

app.listen(port, () => {
  console.log(`Server is responsive on port ${port}`);
});

