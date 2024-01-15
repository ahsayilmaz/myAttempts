export function isValidSSN(id) {
    if (typeof id !== 'string') {
        return false;
    }
    let ssnPattern = /^(\d{3})-(\d{2})-(\d{4})$/;
    let match = ssnPattern.exec(id);
    if (!match) {
        return false;
    }
    let areaNumber = parseInt(match[1], 10);
    if (areaNumber === 0 || areaNumber === 666 || areaNumber >= 900) {
        return false;
    }
    let groupNumber = parseInt(match[2], 10);
    if (groupNumber === 0) {
        return false;
    }
    let serialNumber = parseInt(match[3], 10);
    if (serialNumber === 0) {
        return false;
    }
    return true;
}
