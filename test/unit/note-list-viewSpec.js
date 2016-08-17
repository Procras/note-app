// var assert = require("./assert");
// var List = require("../../src/note-list-model.js");
// var View = require("../../src/note-list-view.js");
  var assert = new Assert();

function helper () {
  var list = new List();
  list.write("hello");
  list.write("goodbye");
  list.write("what");
  view = new View(list);
}

function testNoteListView() {
  helper();
  console.log("note-list-viewSpec.js it views"); //identifies which test in the console
  assert.isNotEqual(view, null);
}

function testNoteListViewPrintHtml() {
  helper();
  var string = "<li>hello</li><li>goodbye</li><li>what</li>";
  console.log("note-list-viewlSpec.js it prints html"); //identifies which test in the console
  assert.isEqual(view.htmlid(), string);
}

 testNoteListView();
 testNoteListViewPrintHtml();
