const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
})

router.get('/add', (req, res) => {
    res.render('addUser', { title: 'Add User' });
})

module.exports = router;