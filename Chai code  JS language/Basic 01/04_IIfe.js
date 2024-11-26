//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFF
    console.log('DB CONNECTED');
})();

(() => {
    console.log('DB CONNECTED');
})()


// execution context ====> next