
// Synchronous execution
console.log("Start");
// setTimeout is in callback queue
// (console.log("SetTimeout callback")) moves into the callback queue (task queue).
// Microtask queue (Promises, process.nextTick in Node) has higher priority than the callback/task queue (setTimeout, setInterval, I/O events).
setTimeout(() => {
    console.log('SetTimeout callback'); 
   
    // So after synchronous code is done, microtasks run before timers.
}, 4000);

// .then(...) callback goes into the microtask queue.
// Promises (microtasks) → run immediately after synchronous code, before any setTimeout.
Promise.resolve().then(()=>
{
    console.log("Promise callBack");    
})
console.log("End");

