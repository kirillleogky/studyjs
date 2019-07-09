function multiply() {
    var number = 1;
    for (var i = 0; i < arguments.length; i++) {
      number *= arguments[i];
    }
    return number;
  }
