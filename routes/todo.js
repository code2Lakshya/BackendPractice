const express=require('express');
const router=express.Router();

const {createTodo}=require('../controllers/createTodo');
const {getTodos}=require('../controllers/getTodos');
const {getTodo}=require('../controllers/getTodo');
const {updateTodo}=require('../controllers/updateTodo');
const {deleteTodo}=require('../controllers/deleteTodo');

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodos);
router.get('/getTodoById/:id',getTodo);
router.put('/updateTodo/:id',updateTodo);
router.put('/deleteTodo/:id',deleteTodo);

module.exports=router;