


const formatNamesAndAge = (first, last, age) => {
    const firstName = first.charAt(0).toUpperCase() + first.substring(1).toLowerCase();
    const lastName = last.charAt(0).toUpperCase() + last.substring(1).toLowerCase();
    const ageToNum = Number.parseInt(age, 10);
    return {firstName, lastName, ageToNum}
}

// the below calls the capitalizedName function - destructures the returned object from the above code
// and passes those variables as an argument to the below basicInterpolation function
const {firstName, lastName, ageToNum} = formatNamesAndAge("oLIvor", "hILl", "40");


const basicInterpolation = (firstName, lastName, age) => {

    let interpolatedPhrase = `Hi, my name is ${firstName} ${lastName}. I am ${age} years old!`

    return interpolatedPhrase
}

console.log(basicInterpolation(firstName, lastName, ageToNum));