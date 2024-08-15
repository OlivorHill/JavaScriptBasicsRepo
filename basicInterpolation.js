



const capitalizeName = (first, last) => {
    const firstName = first.charAt(0).toUpperCase() + first.substring(1).toLowerCase();
    const lastName = last.charAt(0).toUpperCase() + last.substring(1).toLowerCase();

    return {firstName, lastName}
}

const {firstName, lastName} = capitalizeName("oLIvor", "hILl");



const basicInterpolation = (firstName, lastName, age) => {

    let interpolatedPhrase = `Hi, my name is ${firstName} ${lastName}, I am ${age} years old!`

    return interpolatedPhrase
}

console.log(basicInterpolation(firstName, lastName, 30))