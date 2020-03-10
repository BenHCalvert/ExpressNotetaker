// Dependecies
const path = require("path");
// const router = require("express").Router()

module.exports = function(app) {

    // HTML Routes
    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    // default route is home
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
    })

}
