const registrationService = require('../services/registrationService');

exports.create = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { event_id, full_name, email, phone, category } = req.body;

    await registrationService.create({
      user_id,
      event_id,
      full_name,
      email,
      phone,
      category,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ message: 'Gagal membuat pendaftaran' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await registrationService.getAll();
    // mysql2/promise mengembalikan array, langsung kirim ke frontend
    res.json(data); 
  } catch (err) {
    console.error("GET ALL ERROR:", err);
    res.status(500).json([]);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await registrationService.updateStatus(id, status);
    res.json({ success: true });
  } catch (err) {
    console.error("UPDATE STATUS ERROR:", err);
    res.status(500).json({ message: 'Gagal update status' });
  }
};

exports.deleteRegistration = async (req, res) => {
  try {
    await registrationService.remove(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: 'Gagal menghapus data' });
  }
};