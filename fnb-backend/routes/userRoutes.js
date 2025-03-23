const User = require('../models/user');

async function handleUserRoutes(req, res) {
  if (req.method === 'POST' && req.url === '/user') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const newUser = new User(data);
        const savedUser = await newUser.save();
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(savedUser));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });

    return true; // ✅ Important: Tells server this route was handled
  }

  return false;
}

module.exports = handleUserRoutes;
