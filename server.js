require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8000;

/* MIDDLEWARE */
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
}));
app.use(express.static('public'));
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
    });
app.use('', require('./routes/routes')); // route middleware

/* SET TEMPLATE ENGINE */
app.set('view engine', 'ejs');

/* db connection */
mongoose.connect(process.env.DB_URI, {useNewURLParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 💀💀💀`);
})