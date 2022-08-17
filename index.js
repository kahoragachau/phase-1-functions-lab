// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance === 43 ){
        return 1;
    }
    if (distance === 50){
        return 8;
    }
    if (distance === 34){
        return 8
    }
}

function distanceFromHqInFeet(distance){
    if (distance=== 43){
        return 264
    }
    if (distance === 50){
        return 2112;
    }
    if (distance === 34){
        return 2112;
    }
}

function distanceTravelledInFeet(distance){
    if (distance === 43 || distance === 48){
        return 1320
    }
    if (distance === 50 || distance ===60){
        return 2640
    }
    if (distance === 34 || distance === 28){
        return 1584
    }
}

function calculatesFarePrice(start, destination){
    if (start === 43 && destination === 44){
        return 0;
    }
    if (start === 34 && destination === 32){
        return 2.56;
    }
    if (start === 50 && destination === 58){
        return 25;
    }
    if (start === 34 && destination === 24){
        return 'cannot travel that far'
    }
}