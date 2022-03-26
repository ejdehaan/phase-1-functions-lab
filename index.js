function distanceFromHqInBlocks(streetNumber){
    let hq = 42
    if (streetNumber > hq) {
        return streetNumber - hq
    } else {return hq - streetNumber
    }
}
function distanceFromHqInFeet(streetNumber){
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start,end){
    if (start > end) {
        return (start - end) * 264
    } else {
        return (end - start) * 264
    }
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)  
    if ( distance > 2500)
        return 'cannot travel that far'
    else if (distance >=2000)
        return 25
    else if (distance >= 400)
        return (distance - 400) * .02 
    else if (distance < 400)
        return 0
  }

