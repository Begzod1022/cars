const cars = [
    "Toyota Camry; $24,000; 2021; 30,000",
    "Honda Accord; $26,000; 2020; 25,000",
    "Ford Mustang; $30,000; 2019; 15,000",
    "Chevrolet Malibu; $22,000; 2022; 10,000",
    "Nissan Altima; $23,500; 2021; 20,000",
    "BMW 3 Series; $40,000; 2020; 18,000",
    "Audi A4; $38,000; 2021; 12,000",
    "Mercedes-Benz C-Class; $42,000; 2019; 22,000",
    "Volkswagen Jetta; $20,000; 2022; 8,000",
    "Subaru Outback; $28,000; 2021; 15,000",
    "Hyundai Sonata; $25,000; 2020; 20,000",
    "Kia Optima; $24,500; 2021; 17,000",
    "Mazda6; $27,000; 2020; 19,000",
    "Porsche 911; $100,000; 2019; 5,000",
    "Tesla Model 3; $39,000; 2022; 8,000",
    "Volvo S60; $35,000; 2021; 10,000",
    "Lexus ES; $39,500; 2020; 12,000",
    "Chrysler 300; $31,000; 2019; 30,000",
    "Dodge Charger; $33,000; 2021; 15,000",
    "Jeep Grand Cherokee; $45,000; 2022; 5,000"
];

const names = []

const fname = prompt('Whats your name?')

if (fname.includes(fname)) {
    names.push(fname)
    const surename = prompt('Your surename')
    if (surename.includes(surename)) {
        names.push(surename)
        const callNum = prompt('Your call number')
        if (callNum.includes(callNum)) {
            names.push(callNum)
        }
    }
}

const ms = confirm(`Hi' ${fname}, do you want to buy car?`)

if (ms === true) {
    const ms2 = prompt(`${cars}`)
    cars.forEach(cars => {
        if (cars.toUpperCase(0) === ms2.toLowerCase()) {
            ms2 = cars
        }
    })
    const ms3 = confirm(`${Name}, ${Price}, ${Milage}`)
    if (ms3 === true) {
        const ms4 = confirm('Do you really want to buy it?')
        if (ms4 === true) {
            alert('Congratulations! You bought a new car, see you next time!')
        } else {
            alert('See you next time!')
        }
    } else {
        alert('Pls Try Again')
    }

} else {
    alert('Pls Try Again')
}