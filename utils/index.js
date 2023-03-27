module.exports = {
    arraysEqual: (array1, array2) => {
        if(array1.length !== array2.length) return false
        array1.forEach((element, index) => {
            if(element !== array2[index]) return false
        })
        return true
    }
}