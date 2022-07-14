const router = require("express").Router()
const todoController = require("../controllers/todoController")

router.post("/todo", todoController.todoAdd)

router.get("/todo", todoController.todoGetAll)

router.put("/todo/:id", todoController.todoUpdate)

router.delete("/todo/:id", todoController.todoDelete)

router.get("/todo/:id", todoController.todoGet)

module.exports = router