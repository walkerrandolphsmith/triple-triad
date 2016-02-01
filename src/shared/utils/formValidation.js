
export function isEmpty(value) {
    return value === undefined || value === null || value === '';
}

export function isGreaterThanMinLength(min) {
    return value => !isEmpty(value) && value.length > min
}

export function isLessThanMaxLength(max) {
    return value => !isEmpty(value) && value.length < max
}

export function isInteger(value) {
    return Number.isInteger(Number(value)) && !Array.isArray(value)
}