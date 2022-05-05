const express = require('express');
const router = express.Router();

let idCounter = 3;
let users = [{"id": 1, "name": "fred123"}, {"id": 2, "name": "fred234"}];

router.get('/', (req, res) => {
    res.status(200).json(users);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (user) {
        res.status(200).json(user);
        return; // stops the function from trying to execute the next res.status(404)
    }
    res.status(404).send(`User with id ${id} not found.`);
});

router.post('/', (req, res) => {
    const user = req.body;
    //req.body.username
    user.id = idCounter++;

    users.push(user);

    res.status(200).json(user);
});

// TIP: You are dealing with objects, they don't need to be readded to the array

// 2. Create and implement a delete by id route
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (user) {
        users.splice(users.indexOf(user), 1);
        res.status(200).json(user);
        return;
    }
    res.status(404).send(`User with id ${id} not found.`);
});

// 3. Create and implement an update route (changed to different method)
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const oldUser = users.find(user => user.id == id);
    const updatedUser = req.body;
    // updatedUser.id = id;

    if (oldUser) {
        // users.splice((id - 1), 1, updatedUser);
        users[id - 1].name = updatedUser.name;
        res.status(200).json(users[id - 1]);
        return;
    }
    res.status(404).send(`User with id ${id} not found.`);
});

module.exports = router;