/*--------------------Apartado A -------------------*/

var user = { name: "María", age: 30, city: "Madrid" };
var clonedUser = { name: "María", age: 30, city: "Madrid"};

console.log("Resultado de === : " + (user === clonedUser)); // false

function isEqual(a, b) {
    var result = Object.keys(a).length === Object.keys(b).length;

    if (result)
    for (i in a) {
        result = result && (b.hasOwnProperty(i) && b[i] === a[i]);
    }
    return result;
}

console.log("Resultado de isEqual(a, b): " + isEqual(user, clonedUser)); // true

/*--------------------Apartado B -------------------*/

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  
  function isDeepEqual(a, b) {
    var result = Object.keys(a).length === Object.keys(b).length;

    if (result)
    for (i in a) {
        if (typeof a[i] === 'object') {
          result = result && isDeepEqual(a[i], b[i]);
        }
        else {
          result = result && (b.hasOwnProperty(i) && b[i] === a[i]);
        }
        
    }
    return result;
    
  }
  
  console.log("Resultado de isDeepEqual(a, b): " + isDeepEqual(user, clonedUser)); // true