const service = require('../services/eventService');

exports.getEvents = async (req, res) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (error) {
    console.error('GET EVENTS ERROR:', error);
    res.status(500).json({ message: 'Gagal mengambil data event' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    await service.create(req.body);
    res.json({ message: 'Event ditambahkan' });
  } catch (error) {
    console.error('CREATE EVENT ERROR:', error);
    res.status(500).json({ message: 'Gagal menambahkan event' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    await service.update(req.params.id, req.body);
    res.json({ message: 'Event diperbarui' });
  } catch (error) {
    console.error('UPDATE EVENT ERROR:', error);
    res.status(500).json({ message: 'Gagal memperbarui event' });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.json({ message: 'Event dihapus' });
  } catch (error) {
    console.error('DELETE EVENT ERROR:', error);
    res.status(500).json({ message: 'Gagal menghapus event' });
  }
};
