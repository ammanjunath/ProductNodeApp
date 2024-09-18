// controllers/userController.js
const User = require('../models/user');

exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Home Page', users: [] });
};

exports.addUser = (req, res) => {
    const userName = req.body.name;
    const newUser = new User(userName);
    // Here, you would typically save the user to a database
    console.log('User added:', newUser);
    res.redirect('/');
};

