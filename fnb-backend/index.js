const http = require('http');
const connectDB = require('./config/db');
const handleUserRoutes = require('./routes/userRoutes');
const handleMenuRoutes = require('./routes/menuRoutes');
const handleOrderRoutes = require('./routes/orderRoutes');

connectDB();

const server = http.createServer(async (req, res) => {
  if (await handleUserRoutes(req, res)) return;
  if (await handleMenuRoutes(req, res)) return;
  if (await handleOrderRoutes(req, res)) return;

  // Default response if no routes match
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hotel F&B Backend is running...');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
