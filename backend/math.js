const sum = (a, b) => {
    let result = a + b
    console.log( "sum is = " + result)
}

const mult = (a, b) => {
    let result = a * b
    console.log( "mult is = " + result)
}
// 1
// module.exports = sum

// 2
module.exports = {
    sum,
    mult
}