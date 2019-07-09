export var obj = {
      first: prompt("Введите первое число"),

      second: prompt("Введите второе число"),

      plus: function() {
        return (+this.first) + (+this.second);
      },

      multiply: function() {
        return (+this.first) * (+this.second);
      }
    };
