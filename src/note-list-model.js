

(function(exports){
  var List = function() {
    this.storage = [];
  };

  List.prototype.write = function(string){
    var note = new Note(string);
    this.storage.push(note);
  };

  List.prototype.read = function(){
    return this.storage;
  };

  exports.List = List;
})(this);
