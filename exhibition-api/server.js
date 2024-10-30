require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); 
const app = express();

// Setting up a database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// CORS settings 
app.use(cors());

// Settings for processing JSON requests
app.use(express.json());

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query(
    'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
    [username, hashedPassword, role],
    (err) => {
      if (err) return res.status(500).send({ error: err.message });
      res.send({ message: 'User registered successfully!' });
    }
  );
});

// Endpoint for user authorization
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Logging in with:', { username, password });

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
          console.error('Database error:', err);
          return res.status(500).send({ error: 'Database error' });
      }
      if (!results.length) {
          return res.status(401).send({ error: 'Invalid credentials' });
      }
      console.log('Results:', results); // Це має бути всередині цього колбеку
      if (!bcrypt.compareSync(password, results[0].password)) {
          return res.status(401).send({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: results[0].id, role: results[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.send({ message: 'Login successful!', token });
  });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));


