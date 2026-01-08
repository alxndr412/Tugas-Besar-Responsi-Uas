const service = require('../services/authService');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await service.login(username, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    await service.register(name, username, password);
    res.json({ message: 'Register berhasil' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
