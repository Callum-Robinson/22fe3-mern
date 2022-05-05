const UserNotFoundError = require('../errors/user-not-found-error.js');
const User = require('../model/user.js');

// representing our database
let idCounter = 3;
const users = [new User(1, "fred123"), new User(2, "fred234")];

module.exports = {

    readAll: (req, res, next) => {
        res.status(200).json(users);
    },
    
    readById: (req, res, next) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        if (user) {
            res.status(200).json(user);
            return; // stops the function from trying to execute the next res.status(404)
        }
        // pass the error to next() to call the next error handler
        // - in Express 5, we can just throw the error (Express5 is still in beta, we are using Express4 here)
        next(new UserNotFoundError(id));
    },

    create: (req, res, next) => {
        const user = new User(idCounter++, req.body.username);
        users.push(user);
        res.status(200).json(user);
    },

    update: (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        console.log(updates);
        const user = users.find(user => user.id == id);
        if (user) {
            user.username = updates.username;
            res.status(200).json(user);
            return; // stops the function from trying to execute the next res.status(404)
        }
        next(new UserNotFoundError(id));
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);

        if (user) {
            const index = users.indexOf(user);
            users.splice(index, 1);
            res.status(200).json(user);
            return; // stops the function from trying to execute the next res.status(404)
        }
        next(new UserNotFoundError(id));
    }
}

