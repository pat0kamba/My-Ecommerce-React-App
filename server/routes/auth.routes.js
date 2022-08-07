const router = require('express').Router();
const {signIn, signOut} = require('../controllers/auth.controllers');
router.post('/auth/signin', signIn);
router.get('/auth/signout', signOut);

module.exports = router;  