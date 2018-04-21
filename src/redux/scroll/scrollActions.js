
/**
 * 
 * @param {Integer} offsetTop 
 * @param {setInterval} startInterval 
 */
export function scrolling(offsetTop) {//, startInterval) {
    return {
        type: 'SCROLL_CHANGE',
        position: offsetTop,
        //intervalID: startInterval,
    }
}

/**
 * 
 * @param {clearInterval} stopInterval 
 */
export function stopScroll(stopInterval) {
    return {
        type: 'STOP_SCROLL',
        intervalID: stopInterval,
    }
}

export function updateDirectionAction(newDirectionValue) {
    return {
        type: 'UPDATE_DIRECTION',
        newDirection: newDirectionValue,
    }
}