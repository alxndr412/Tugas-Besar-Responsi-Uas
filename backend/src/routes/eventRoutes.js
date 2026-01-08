const express = require('express');
const router = express.Router();

const controller = require('../controllers/eventController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.get('/', controller.getEvents);
router.post('/', auth, role('admin'), controller.createEvent);
router.put('/:id', auth, role('admin'), controller.updateEvent);
router.delete('/:id', auth, role('admin'), controller.deleteEvent);

module.exports = router;
