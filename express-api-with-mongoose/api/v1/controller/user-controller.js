const UserNotFoundError = require('../errors/user-not-found-error.js');
const User = require('../model/user.js');

// when we create an instance of a mongoose model, we must pass an object matching the structure of the model
// to the constructor
const users = [new User({ username: "fred123" }), new User({ username: "bob123" })];

module.exports = {

    readAll: async (req, res, next) => {
        const users = await User.find({});
        
        res.status(200).json(users);
    },
    
    readById: async (req, res, next) => {
        const id = req.params.id;
        const user = await User.findById(id);
        if (user) {
            res.status(200).json(user);
            return; // stops the function from trying to execute the next res.status(404)
        }
        // pass the error to next() to call the next error handler
        // - in Express 5, we can just throw the error (Express5 is still in beta, we are using Express4 here)
        next(new UserNotFoundError(id));
    },

    create: async (req, res, next) => {
        const user = new User({ username: req.body.username });
        await user.save(err => {
            // if the save operation was unsuccessful, the err object will be truthy
            if (err) return next(err);
            console.log("User saved successfully");
        })
        res.status(200).json(user);
    },

    update: async (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;

        // This is the callback way, do not use async await
        // updateOne(queryFilter, updates, callback)
        // User.updateOne({ _id: id }, updates, (err, result) => {
        //     console.log("hello")
        //     if (err) {
        //         next(err);
        //         return;
        //     }
        //     res.status(200).json(result);
        // }); 

        // Async await method
        const user = await User.updateOne({ _id: id }, updates);

        if (user) {
            res.status(200).json(user);
            return;
        }
        next(new UserNotFoundError(id));
    },

    delete: async (req, res, next) => {
        const filter = { _id: req.params.id };
        // const user = await User.exists(filter);
        
        // if (user) {
        //     await User.deleteOne(filter);
        //     return res.status(200).json(user);
        // }
        // next(new UserNotFoundError(filter.id));

        // alternate way
        const user = await User.findOneAndDelete(filter);
        if (user) {
            return res.status(200).json(user);
        }
        next(new UserNotFoundError(id));
    }
}

