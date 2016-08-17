(function(exports) {

  function Assert() {

  }

//   assert.prototype.isEqual = function(p1, p2) {
//     if(p1 === p2){
//     console.log("pass");
//   } else {
//     console.log("fail");
//   }
// };

  // Assert.prototype.isNotEqual = function(p1, p2) {
  //   if(p1 !== p2) {
  //     console.log("pass");
  //   } else {
  //     console.log("fail");
  //   }
  // };
  //
  // Assert.prototype.doesArrayContain = function(array, object){
  //   if(array.includes(object)){
  //     console.log("pass");
  //   }
  // };


  Assert.prototype = {
    isEqual: function(p1, p2) {
    if(p1 === p2){
    console.log("pass");
  } else {
    console.log("fail");
  }
},
    isNotEqual: function(p1, p2) {
    if(p1 !== p2) {
    console.log("pass");
  } else {
    console.log("fail");
   }
 },
  doesArrayContain: function(array, object){
    if(array.includes(object)){
      console.log("pass");
    }
  }
};

  exports.Assert = Assert;
  // exports.isEqual = isEqual;
  // exports.doesArrayContain = doesArrayContain;
  // exports.isNotEqual = isNotEqual;
})(this);
