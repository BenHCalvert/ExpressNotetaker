// Dependecies
const path = require("path");
const router = require("express").Router()

// HTML Routes
router.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// default route is home
router.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "../public/index.html"));

})

module.exports = router;