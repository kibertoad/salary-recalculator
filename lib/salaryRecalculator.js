export function recalculate(oldSalary, oldLowerRange, oldUpperRange, newLowerRange, newUpperRange) {
    return (((oldSalary - oldLowerRange) / (oldUpperRange - oldLowerRange)) * (newUpperRange - newLowerRange) + newLowerRange)
}
