// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - hqLocation);
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}
function distanceTravelledInFeet(pickUp, dropOff) {
    return Math.abs((dropOff - pickUp) *264)
}
function calculatesFarePrice(pickUp, dropOff) {
    const distance = distanceTravelledInFeet(pickUp, dropOff);
    if(distance<=400) {
        return 0;
    } else if(distance > 400 && distance < 2000) {
        return (distance-400) * 0.02;
    } else if(distance < 2500) {
        return 25;
    } else if(distance >2500){
       return 'cannot travel that far';
    }

}