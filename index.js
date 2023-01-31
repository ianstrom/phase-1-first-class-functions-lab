const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
    let firstTwo = []
    for (let i = 0; i < 2; i++) {
        firstTwo.push(drivers[i])
    }
    return firstTwo;
}

const returnLastTwoDrivers = function() {
    let lastTwo = []
    for (let i = 2; i < drivers.length; i++) {
        lastTwo.push(drivers[i])
    }
    return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function fareMultiplier(num) {
        return fare * num;
    };
};

function fareDoubler(fare) {
    return fare * 2;
};

function fareTripler(fare) {
    return fare * 3;
};

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
       return returnFirstTwoDrivers();
    } else {
       return returnLastTwoDrivers();
    }
}