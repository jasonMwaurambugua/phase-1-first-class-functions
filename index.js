function receivesAFunction(callback) {
    callback();
  callback();
}

function spy() {
    const namedFn = (spy) => console.log("this is a named function");
    return namedFn;
    
  };

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}
