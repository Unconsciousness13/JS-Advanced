function solve(speed, area) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let typeSpeeding;
    // city

    if (speed - city <= 20) {
        typeSpeeding = 'speeding'
    }
    else if (speed - city > 20 && speed - city <= 40) {
        typeSpeeding = 'excessive speeding'
    }
    else if (speed - city > 40) {
        typeSpeeding = 'reckless driving'
    }

    if (area === "city") {
        if (speed <= city) {
            return `Driving ${speed} km/h in a ${city} zone`
        }
        else {
            return `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - ${typeSpeeding}`
        }
    }

    // motorway

    if (speed - motorway <= 20) {
        typeSpeeding = 'speeding'
    }
    else if (speed - motorway > 20 && speed - motorway <= 40) {
        typeSpeeding = 'excessive speeding'
    }
    else if (speed - motorway > 40) {
        typeSpeeding = 'reckless driving'
    }

    if (area === "motorway") {
        if (speed <= motorway) {
            return `Driving ${speed} km/h in a ${motorway} zone`
        }
        else {
            return `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - ${typeSpeeding}`
        }
    }


    // residential
    if (speed - residential <= 20) {
        typeSpeeding = 'speeding'
    }
    else if (speed - residential > 20 && speed - residential <= 40) {
        typeSpeeding = 'excessive speeding'
    }
    else if (speed - residential > 40) {
        typeSpeeding = 'reckless driving'
    }

    if (area === "residential") {
        if (speed <= residential) {
            return `Driving ${speed} km/h in a ${residential} zone`
        }
        else {
            return `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - ${typeSpeeding}`
        }
    }

    // interstate

    if (speed - interstate <= 20) {
        typeSpeeding = 'speeding'
    }
    else if (speed - interstate > 20 && speed - interstate <= 40) {
        typeSpeeding = 'excessive speeding'
    }
    else if (speed - interstate > 40) {
        typeSpeeding = 'reckless driving'
    }

    if (area === "interstate") {
        if (speed <= interstate) {
            return `Driving ${speed} km/h in a ${interstate} zone`
        }
        else {
            return `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - ${typeSpeeding}`
        }
    }

}

console.log(solve(40, 'city'))
console.log(solve(21, 'residential'))
console.log(solve(120, 'interstate'))
