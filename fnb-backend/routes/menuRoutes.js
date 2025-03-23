const MenuItem = require('../models/menuItem');

async function handleMenuRoutes(req, res) {
  if (req.method === 'GET' && req.url === '/menu') {
    try {
      const items = await MenuItem.find();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(items));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return true;
  }

  if (req.method === 'POST' && req.url === '/menu') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const newItem = new MenuItem(data);
        const savedItem = await newItem.save();

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(savedItem));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return true;
  }

  return false;
}

module.exports = handleMenuRoutes;
