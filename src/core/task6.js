export default function removeUnnecessary(array, callback) {

      var newArray = array.filter(function(elements) {
        return elements > 5;
      });

      callback(newArray);
      return newArray;
    }

    function showElements(array) {
      alert(array.join(","));
    }
