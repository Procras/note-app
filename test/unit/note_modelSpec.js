// var assert = require("./assert");
// var Note = require("../../src/note-model.js");


function testNoteSavedCorrectly() {
  var assert = new Assert();
  var text = "my first note";
  var note = new Note(text);
  assert.isEqual(note.readNote(),text);
}

 testNoteSavedCorrectly();
