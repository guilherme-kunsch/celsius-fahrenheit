function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes ('C')
    const fahrenheitExists = degree.toUpperCase().includes ('F')

    //Error flow
    // !if the two do not exist)
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    //ideal flow F --> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'  

    //alternative flow C -->
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

//here we take the error presented above
try {
    console.log(transformDegree('50C'));
    console.log(transformDegree('50F'));
    transformDegree ('50Z')
} catch (error) {
    console.log(error.message)
}