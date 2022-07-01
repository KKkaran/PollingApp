const router = require("express").Router();

//get route
router.get("/", (req, res) => {
    res.json({"creator": process.env.testVar})
})

router.get("/polling", (req, res) => {
    res.send("<h2>Karan Sodhi is creating the form page</h2>")
})
//get a single route
router.get("/:id", (req, res) => {
    res.json({'msg':"Returning a single workout"})
})
//post a single wor

router.post("/", (req, res) => {
    res.json({'msg':"posting a single workout"})
})
router.get("/:id", (req, res) => {
    res.json({'msg':"Returning a single workout"})
})
module.exports = router