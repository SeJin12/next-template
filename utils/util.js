
/**
 * @param  object
 * @returns boolean
 */
export function isFalsy(obj) {
    let ret = false;
    console.log(obj, typeof obj);
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
    if(isNaN(obj))
        ret = true;
    return ret;
}