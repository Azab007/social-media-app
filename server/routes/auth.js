
const router = require('express').Router();
const { registerUser, login} = require('../controllers/auth.js')

//router.get('/', getAuth);
router.post('/register', registerUser);
router.post('/login', login);

module.exports = router;