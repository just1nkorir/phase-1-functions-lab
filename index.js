function distanceFromHqInBlocks(number, number2 = 42) {
    if (number > number2) {
return number - number2;
 } else {
    return number2 - number;
 }
}

function distanceFromHqInFeet(number, number2 ,number3 = 264) {
    distanceFromHqInBlocks(number, number2 = 42);
    if (number > number2) {
return (number - number2)*number3;
 } else {
    return (number2 - number)*number3;
 }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start)*264;
    } else {
        return (start-destination)*264;
    }
}
function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
   if ((destination - start)*264 <= 400) {
    return 'This one is on me';
    } else if ((destination - start)*264 > 400, (destination - start)*264 <= 2000) {
        return (((destination - start)*264) - 400)*2;
    } else if ((destination - start)*264 > 2000, (destination - start)*264 <= 2500) {
        return (((destination - start)*264) - 400)*2 + 25;
    } else if ((destination - start)*264 > 2500) {
        return 'cannot travel that far';
    } else {
        return '';
    }
}


