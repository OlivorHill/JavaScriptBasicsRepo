const basicInterpolation = (firstName, lastName, age) => {

    let interpolatedPhrase = `Hi, my name is ${firstName} ${lastName}, I am ${age} years old!`

    return interpolatedPhrase
}

console.log(basicInterpolation("Olivor", "Hill", 30))