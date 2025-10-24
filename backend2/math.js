const sum = (a, b) => {
    let result = a + b
    console.log( "sum is = " + result)
}

const mult = (a, b) => {
    let result = a * b
    console.log( "mult is = " + result)
}

// export default sum

export {
    sum, mult
}