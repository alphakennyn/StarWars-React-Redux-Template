/** 
 * Start scroll
*/
export function scrollDown(currentOffset, isSlow) {
    if(isSlow){
        currentOffset = currentOffset + 0.1;
        return currentOffset;
    }
    return ++currentOffset;
}

export function scrollUp(currentOffset, isSlow) {
    if(isSlow){
        currentOffset = currentOffset - 0.1;
        return currentOffset;
    }
    return --currentOffset
}

export function setForwardDirection(currentDirection) {
    if(currentDirection > 0) {
        return currentDirection*-1;
    } else {
        return currentDirection;
    }
}


