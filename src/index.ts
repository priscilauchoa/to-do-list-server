import expressPromiseRouter from "@types/express-promise-router";

import toDoListApi from "../api/to-do-list-router";

const router = new expressPromiseRouter();

router.use("/task", toDoListApi);

export default router;
