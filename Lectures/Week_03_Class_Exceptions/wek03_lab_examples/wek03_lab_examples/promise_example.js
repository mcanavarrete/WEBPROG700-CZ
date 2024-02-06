// Defines a function 'checkPromise' that takes a 'flag' parameter and returns a Promise.
function checkPromise(flag){
    // Creates a new Promise object. The executor function of the Promise takes two arguments: resolve and reject.
    var willPassYou = new Promise((resolve, reject) => {
        // Conditional check to determine the outcome of the Promise.
        if(flag >= 3 && flag <=5){
            // If the condition is met (flag is between 3 and 5), the Promise is fulfilled with the message 'I PASSED you'.
            resolve('I PASSED you')
        }else{
            // If the condition is not met, the Promise is rejected with the message 'I FAILED you'.
            reject('I FAILED you')
        }
    })

    // The function returns the Promise object.
    return willPassYou
}

// Syntax - 1: Using the 'then' method with two callback functions: one for fulfillment and one for rejection.
checkPromise(2).then(
    onFullfilled => { console.log('PASS: ' + onFullfilled) }, // This function is not called because the Promise is rejected.
    onRejected => { console.log('FAIL: ' + onRejected) } // This function is called, logging 'FAIL: I FAILED you'.
)

// A similar example with a different flag value that leads to Promise fulfillment.
checkPromise(4).then(
    success => { console.log('PASS: ' + success) }, // This function is called, logging 'PASS: I PASSED you'.
    error => { console.log('FAIL: ' + error) } // This function is not called because the Promise is fulfilled.
)

// Syntax - 2: Using the 'then' method for fulfillment followed by the 'catch' method for rejection.
checkPromise(7).then(success => {
    console.log('PASS: ' + success) // This function is not called because the Promise is rejected.
}).catch(error => {
    console.log('FAIL: ' + error) // This function is called, logging 'FAIL: I FAILED you'.
})

// Demonstrating Promise chaining, where the result of one Promise is used to start another Promise.
checkPromise(4).then(success => {
    // This function is called, logging the length of the success message.
    console.log('Length: ' + success.length) // Logs 'Length: 12'
    // The return value here ('success 12') is passed to the next 'then' in the chain.
    return `success ${success.length}`
}).then(success => {
    // Receives the return value from the previous 'then' ('success 12') and logs it.
    console.log('PASS: ' + success) // Logs 'PASS: success 12'
}).catch(error => {
    // This catch is for handling
})