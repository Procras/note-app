

(function(exports){
  var View = function(array) {
    this.array = array;
  };
  View.prototype.htmlid = function () {
    var string = "";
    for (i = 0; i < this.array.read().length; i++) {
      string += "<li>" + this.array.read()[i].readNote() + "</li>";
    }
    return string;
  };
  exports.View = View;
})(this);
