const router = require('express').Router();
const {List, Read, Create, userById} = require("../controllers/user.controllers.js");
const {requireSignIn, hasAuthorization} = require("../controllers/auth.controllers.js");

router.get('/api/list', List);
router.post('/api/create', Create);
router.get('/api/read/:userId',requireSignIn, Read )
router.param('userId', userById);

module.exports = router; 