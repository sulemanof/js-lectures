const checkValue = (value) => {
    const input = parseFloat(value)
    if (Number.isNaN(input)) {
        return 0;
    }

    return input;
}

export function convertToBYN(value) {
    return checkValue(value) * 2.16;
}

export function convertToUSD(value) {
    return checkValue(value) * 0.46;
}