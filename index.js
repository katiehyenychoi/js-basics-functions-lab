// Code your solution in this file!
function distanceFromHqInBlocks(Pickup) {
    return Math.abs(Pickup - 42);
}

function distanceFromHqInFeet(Pickup) {
    return distanceFromHqInBlocks(Pickup) * 264;

}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end);
    let price;
    if (dist >= 400 && dist <= 2000) {
        price = (dist - 400) * 0.02;
    }
    else if (dist > 2000 && dist < 2500) {
        price = 25;
    }
    else if (dist >= 2500) {
        price = 'cannot travel that far';
    }
    else price = 0;

    return price;
}