var expressPromiseRouter = require("@types/express-promise-router")

const toDoListApi = require("./to-do-list-api");

const router:any = new expressPromiseRouter();

router.use("/task", toDoListApi);

module.exports = router;
