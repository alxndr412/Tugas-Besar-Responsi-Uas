const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Path ini relatif terhadap apa yang ada di app.use('/registrations', ...)
// Jika di app.js menggunakan /registrations, maka cukup tulis '/'

/* USER */
router.post('/', authMiddleware, registrationController.create);

/* ADMIN */
router.get('/', authMiddleware, roleMiddleware('admin'), registrationController.getAll);

router.put('/:id/status', authMiddleware, roleMiddleware('admin'), registrationController.updateStatus);

router.delete('/:id', authMiddleware, roleMiddleware('admin'), registrationController.deleteRegistration);

module.exports = router;