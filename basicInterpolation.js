const capitalizeName = (first, last) => {
    const firstName = first.charAt(0).toUpperCase() + first.substring(1).toLowerCase();
    const lastName = last.charAt(0).toUpperCase() + last.substring(1).toLowerCase();

    return {firstName, lastName}
}

// the below calls the capitalizedName function - destructures the returned object from the above code
// and passes those variables as an argument to the below basicInterpolation function
const {firstName, lastName} = capitalizeName("oLIvor", "hILl");



const basicInterpolation = (firstName, lastName, age) => {

    let interpolatedPhrase = `Hi, my name is ${firstName} ${lastName}, I am ${age} years old!`

    return interpolatedPhrase
}

console.log(basicInterpolation(firstName, lastName, 30))