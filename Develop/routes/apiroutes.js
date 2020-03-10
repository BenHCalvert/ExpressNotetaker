const db = require("../db/db.json");
const fs = require("fs");
let noteDB = JSON.parse(fs.readFileSync("./db/db.json"));
let ids = noteDB.map(note => note.id);
let noteId = 0;

// display notes from db to the page
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.send(noteDB);
  });

//   If POST request, create new note
  app.post("/api/notes", function(req, res) {      

      let flag = true;
      while (flag) {
        if (!ids.includes(noteId)) {
          flag = false;
          ids.push(noteId);
        } else {
          noteId ++;
        };
      };
      
      let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
      };

      noteDB.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(noteDB, null, 2), err => {
        if (err) throw err;
        res.send(db);
        console.log("note added")
      });
  });

  //   If DELETE request, delete note with id of req.params.id
  app.delete("/api/notes/:id", (req, res) => {

    let identifier = req.params.id;

      noteDB = noteDB.filter(note => note.id != identifier);

      fs.writeFile("./db/db.json", JSON.stringify(noteDB, null, 2), err => {
        if (err) throw err;
        res.send(noteDB);
        console.log("note deleted")
      });
  });
};
