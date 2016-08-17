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
    console.log("passes");
  } else {
    console.log("fails");
  }
},
    isNotEqual: function(p1, p2) {
    if(p1 !== p2) {
    console.log("passes");
  } else {
    console.log("fails");
   }
 },
  doesArrayContain: function(array, object){
    if(array.includes(object)){
      console.log("passes");
    }
  },
  instanceof: function(object1, object2){
    if(object1 instanceof object2){
      console.log("Instance of " + object2.text + " Note-controller passes");
    } else {
      console.log("Instance of " + object2.text + " Note-controller fails");
    }
  }
};

  exports.Assert = Assert;
  // exports.isEqual = isEqual;
  // exports.doesArrayContain = doesArrayContain;
  // exports.isNotEqual = isNotEqual;
})(this);
