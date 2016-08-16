var assert = require("./assert");
var List = require("../../src/note-list-model.js");
var View = require("../../src/note-list-view.js");


function testNoteListView() {
  var list = new List();
  list.write("hello");
  list.write("goodbye");
  view = new View(list);
  assert.isNotEqual(view, null);
}

 testNoteListView();
