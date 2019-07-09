    function addUnicode(words) {

      var numbers = [];

      for (var i = 0; i < words.length; i++) {
        numbers.push(words.charCodeAt(i));
      }

      return numbers.join(", ");
    }
