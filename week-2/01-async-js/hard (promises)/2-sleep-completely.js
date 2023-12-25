/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let newPromise = new Promise((resolve,reject)=>{
       //keep thread busy for milliseconds
       const start = Date.now();
       while(Date.now() <= start+milliseconds){
       }

     resolve();

     }
     );
     return newPromise;
}

module.exports = sleep;
