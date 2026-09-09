function getCngFare(distance, isNight, waitingMinutes) {
    let fare = 50
    let distancefare = 0
    let waitingcharge = 0
    
    if (!waitingMinutes) {
        waitingMinutes = 0
    }
    console.log(distance, isNight, waitingMinutes)

    if (distance >= 2) {
        distancefare = calculateDisFare(distance - 2)
    }

    waitingcharge = calculatewaitingcharge(waitingMinutes)

    fare = fare + distancefare + waitingcharge
    if (isNight) {
        return (fare = fare + (fare * 0.2))
    }
    return fare
}


function calculateDisFare(distance) {
    return distance * 15
}

function calculatewaitingcharge(waitingMinutes) {
    return waitingMinutes * 2
}

console.log(getCngFare(5,false,10))