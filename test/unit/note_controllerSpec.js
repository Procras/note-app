
function testNoteController() {
  var assert = new Assert();
  var noteController = new NoteController();
  assert.instanceof(noteController, NoteController);
}
  var assert = new Assert();
  var list = new List();
  list.write("cocacola");
  var noteController = new NoteController(list);
  list.write("Favorite Drink: Seltzer");
  assert.isEqual(noteController.getHTML(), "<li>cocacola</li><li>Favorite Drink: Seltzer</li>");
  console.log("test noteController");


testNoteController();
