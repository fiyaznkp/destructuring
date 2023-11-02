// array destructuring ; it means unpacking values from array to a bunch of variables

// var arr = ["kerala","malayalam","350"]

// var state = arr[0] here if we console 0,1 the resul will be malayalam 

// console.log(state)

// here the above one is the normal way of assingning array elements to a variable

// here is the steps for array destructuring

// const arr = ["fiyaz","koduvally","25"]

// const [name,place,age] = arr

// console.log(name)

// const numbers = [1,2,3,4,5]

// const [one,two,three,four,five] = numbers

// console.log(one)

//destructuring means extracting values from arrays and objects and assigning them to variables.

// it is example for nested array

// const arr = [1,2,3,4,5,[6,7,8,9]]

// const [one,two,three,four,five,[six,seven,eight,nine]] = arr

// console.log(nine)

//object destructuring 

// const obj = {
//     name:"fiyaz",
//     age:25,
//     place:"koduvally"
// }
// const {name,age,place} = obj

// console.log(name)

// const obj = {
//     name:"fiyaz",
//     place:"koduvally",
//     age:25
// }

// const {name,place,age} = obj

// console.log(name,age)

// const obj = {
//     name:"fiyaz",
//     age:25,

//    more:{
//     place:"koduvally"

//    }
    
// }
// const {name,age, more:{place}} = obj

// console.log(place)

const obj = {
    name:"fiyaz",
    age:25,

    address:{
        place:"koduvally"
    }
}


const {name,age, address:{place}} = obj

console.log(place)