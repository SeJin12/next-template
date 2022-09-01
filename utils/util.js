
/**
 * @param  object
 * @returns boolean
 */
export function isFalsy(obj) {
    let ret = false;

    switch(obj) {
        case false:
        case null:
        case undefined:
        case 0:
        case -0:
        case 0n:
        case "":
        case Infinity:
            ret = true;
    }
    if( typeof obj !==  'object' &&  isNaN(obj))
        ret = true;

    return ret;
}