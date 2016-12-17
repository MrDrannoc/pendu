import express from 'express';
import Todo from '../models/todo.js';

let router = express.Router();

module.exports = (app) => {

    var todo = new Todo();

    router.get('/', todo.findAll);

    router.get('/:id', todo.findById);

    router.post('/', todo.create);

    router.put('/:id', todo.update);

    router.delete('/:id', todo.delete);

};
