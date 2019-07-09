export function factorial(n) {

      var count = n;

      while (count !== 1) {
        count--;
        n *= count;
      }

      return n;
    }
