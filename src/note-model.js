(function(exports) {
var Note = function(string) {
  this.savedText = string;
};

 Note.prototype.readNote = function(){
   return this.savedText;
 };
  module.exports = Note;
})(this);
