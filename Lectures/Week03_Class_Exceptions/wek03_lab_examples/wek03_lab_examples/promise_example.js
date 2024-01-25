
function checkPromise(flag){
    var willPassYou = new Promise((resolve, reject) => {
        if(flag >= 3 && flag <=5){
            resolve('I PASSED you')
        }else{
            reject('I FAILED you')
        }
    })

    return willPassYou
}

//Syntax - 1
checkPromise(2).then(
    onFullfilled => { console.log('PASS: ' + onFullfilled) }, 
    onRejected => { console.log('FAIL: ' + onRejected) }
)

checkPromise(4).then(
    success => { console.log('PASS: ' + success) }, 
    error => { console.log('FAIL: ' + error) }
)

//Syntax - 2
checkPromise(7).then(success => {
    console.log('PASS: ' + success)
}).catch(error => {
    console.log('FAIL: ' + error)
})

//Chaining the Promise
checkPromise(4).then(success => {
    console.log('Length: ' + success.length)
    return `success ${success.length}`
}).then(success => {
    console.log('PASS: ' + success)
}).catch(error => {
    console.log('FAIL: ' + error)
})
