function testNoteWorking () {
 var note = new Note('Hello');
  if (note.getText() !== 'Hello') {
    throw new Error ('test Note Creation:This test has failed');
  } else { console.log('test Note Creation:This test has passed');
  };
};
testNoteWorking();
