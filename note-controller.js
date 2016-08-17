



(function(exports){
  var NoteController = function(list) {
    this.view = new View(list);
  };

  NoteController.prototype.getHTML =  function() {
    return this.view.htmlid();
  };

  NoteController.prototype.writeHTML = function() {
    element = document.getElementById("app");
    element.innerHTML = this.view.htmlid();
    console.log(element);
  };
  exports.NoteController = NoteController;
})(this);
