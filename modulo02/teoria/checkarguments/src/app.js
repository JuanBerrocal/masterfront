function f(input) {
    var result;
    if (input === undefined) {
      result = "Unknown";
    } else if (input === null) {
      result = "";
    } else {
      result = input;
    }
    return result;
  }

g = (input) => (input ? input : (input === undefined ? "Unknown" : ""));

var str = null;
console.log(f(str));
console.log(g(str));