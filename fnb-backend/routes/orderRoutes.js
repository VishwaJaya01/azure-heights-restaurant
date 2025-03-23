const Order = require('../models/order');

async function handleOrderRoutes(req, res) {
  if (req.method === 'POST' && req.url === '/order') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const newOrder = new Order(data);
        const savedOrder = await newOrder.save();

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(savedOrder));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });

    return true;
  }

  return false;
}

module.exports = handleOrderRoutes;
