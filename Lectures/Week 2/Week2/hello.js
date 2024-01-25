console.log("Week 02 - Javascript Arrays Examples");

//Array Declaration Examples

var myArray = new Array (1,2,3,4,5,6,7,8,9)
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']
var mixedArray = [1, 'John', true, 3.14, {name: 'John', age: 34}]


console.log('myArray: ', myArray)
console.log('names: ', names)
console.log('names[0]: ', names[0])
console.log(`myArray[0]: , ${myArray[0]}`)
console.log('names.length: ', names.length)


//Iterating Over an Array

for (var i = 0; i < names.length; i++){
    console.log(`names[${i}]: ${names[i]}`)
    //console.log("names[" + i + "; " + names[i])
}

console.log(typeof(names))
console.log(typeof(myArray))

function checkData(a, b){
    for(var i=0; i < myArray.length; i++)
    {
        if (myArray[i] == a && names[i] == b)
        {
            console.log(mixedArray[i])
            return mixedArray[i]
        }
        
    }
    
console.log('No Match Found')
return 'No Match Found'

}


