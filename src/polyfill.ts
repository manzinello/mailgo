export const mailgoPolyfill = (): void => {
  // Polyfill of find from MDN
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
      value: function (predicate: any) {
        "use strict";
        if (this == null) {
          throw new TypeError(
            "Array.prototype.find called on null or undefined"
          );
        }
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];

        for (var i = 0; i !== length; i++) {
          if (predicate.call(thisArg, this[i], i, list)) {
            return this[i];
          }
        }
        return undefined;
      },
    });
  }
};
