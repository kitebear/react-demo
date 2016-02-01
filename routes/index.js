const router    =       require('koa-router')();
const main      =       require("./main.js");

router.use(main.routes());

module.exports = router;