const db = require('../config/database');

exports.create = async (data) => {
  await db.query(
    `INSERT INTO registrations 
     (user_id, event_id, full_name, email, phone, category, status)
     VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
    [data.user_id, data.event_id, data.full_name, data.email, data.phone, data.category]
  );
};

exports.getAll = async () => {
  // mysql2/promise mengembalikan array [rows, fields]
  // Kita hanya butuh rows (datanya)
  const [rows] = await db.query(`SELECT * FROM registrations ORDER BY id DESC`);
  return rows; 
};

exports.updateStatus = async (id, status) => {
  await db.query('UPDATE registrations SET status=? WHERE id=?', [status, id]);
};

exports.remove = async (id) => {
  await db.query('DELETE FROM registrations WHERE id=?', [id]);
};