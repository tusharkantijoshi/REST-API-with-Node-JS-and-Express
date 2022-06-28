import { v4 as uuid } from 'uuid';
//! uuid: Universally Unique Identifier used to create short non-sequential url-friendly unique ids

let users = [];

//! to get all the users
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

//! to create a new users
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid() });
    //! pushing new user in the users array by adding a new id field

    res.send(`User [${user.username}] added to the database.`);
};

//! to get a specific user
export const getUser = (req, res) => {

    const foundUser = users.find((user) => user.id === req.params.id);

    res.send(foundUser) //! The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /users/:id, then the “id” property is available as req.params.id. This object defaults to {}.
};

//! to delete a specific user
export const deleteUser = (req, res) => {
    res.send(`user with id ${req.params.id} has been deleted`);

    users = users.filter((user) => user.id !== req.params.id);
    //! The filter() method creates a new array filled with elements that returns a true provided by a function.
};

//! to update a specific user
export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    //! The find() method returns the value of the first element that passes a test.

    user.username = req.body.username;
    user.age = req.body.age;

    res.send(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};