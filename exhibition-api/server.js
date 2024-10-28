const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

// Connecting to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exhibition-hub-boxoffice'
});

// Environment for receiving JSON requests
app.use(express.json());

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', 
    [username, hashedPassword, role], 
    (err) => {
      if (err) return res.status(500).send({ error: err.message });
      res.send({ message: 'User registered successfully!' });
    }
  );
});

// Endpoint for user authorization
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err || !results.length || !bcrypt.compareSync(password, results[0].password)) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: results[0].id, role: results[0].role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.send({ message: 'Login successful!', token });
  });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
