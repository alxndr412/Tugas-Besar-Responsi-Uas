const db = require('../config/database');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM events');
  return rows;
};

exports.create = async (data) => {
  const { title, distance, route_image, route_url } = data;
  await db.query(
    `INSERT INTO events (title, distance, route_image, route_url)
     VALUES (?, ?, ?, ?)`,
    [title, distance, route_image, route_url]
  );
};

exports.update = async (id, data) => {
  const { title, distance, route_image, route_url } = data;
  await db.query(
    `UPDATE events
     SET title=?, distance=?, route_image=?, route_url=?
     WHERE id=?`,
    [title, distance, route_image, route_url, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM events WHERE id=?', [id]);
};
