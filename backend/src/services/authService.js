const db = require('../config/database');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt');

exports.register = async (name, username, password) => {
  const [existing] = await db.query(
    'SELECT id FROM users WHERE username = ?',
    [username]
  );

  if (existing.length > 0) {
    throw new Error('Username sudah digunakan');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    'INSERT INTO users (name, username, password, role) VALUES (?, ?, ?, ?)',
    [name, username, hashedPassword, 'user']
  );
};

exports.login = async (username, password) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );

  if (rows.length === 0) {
    throw new Error('Username atau password salah');
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Username atau password salah');
  }

  const token = generateToken({
    id: user.id,
    name: user.name,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  };
};
