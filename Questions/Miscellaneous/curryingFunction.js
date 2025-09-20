function curry(func) {
  //   console.log(func.length);
  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(func.length);
      console.log(args.length);
      console.log("args-", args);
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(func.length);
        console.log(args2.length);
        console.log("args2-", args2);
        return curried.apply(this, args.concat(...args2));
      };
    }
  };
}

function join(a, b, c,d) {
  return `${a}_${b}_${c,d}`;
}

const curriedJoin = curry(join);

console.log(
  curriedJoin(1, 2, 3) // '1_2_3'
);

console.log("first");

console.log(
  curriedJoin(1)(2, 3) // '1_2_3'
);

console.log("second");

console.log(
  curriedJoin(1, 2)(3) // '1_2_3'
);

console.log("third")
console.log(
  curriedJoin(1)(2)(3)(4) // '1_2_3'
);


