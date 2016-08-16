var assert = require("./assert");
var List = require("../../src/note-list-model.js");
var Note = require("../../src/note-model.js");

function testListStoresNote(){
  var text = "I am a new note";
  var note = Note;
  var list = new List(note);

  list.write(text);
  var newNote = list.read()[0];
  assert.isEqual(newNote.readNote(), text);
}

testListStoresNote();
