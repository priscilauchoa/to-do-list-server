import express from 'express'
const taskController = require("./controller/task-controller");
const router = express.Router()

router.get("/tasks", taskController.allTasks);
router.get("/task/:id", taskController.byId);
router.post("add", taskController.createTask);
router.put("/edit/:id", taskController.editTask);
router.post("/remove/:id", taskController.removeTask);


module.exports = router;