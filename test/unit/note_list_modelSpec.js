// var assert = require("./assert");
// var List = require("../../src/note-list-model.js");
// var Note = require("../../src/note-model.js");

function testListStoresNote(){
  var assert = new Assert();
  var text = "I am a new note";
  var note = Note;
  var list = new List(note);

  list.write(text);
  var newNote = list.read()[0];
  // console.log("note_list_modelSpec.js"); //identifies which test in the console
  assert.isEqual(newNote.readNote(), text);
}

testListStoresNote();
