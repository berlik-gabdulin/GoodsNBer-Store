const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/DeviceController");

router.post("/");
router.get("/");
router.get("/:id");

module.exports = router;
