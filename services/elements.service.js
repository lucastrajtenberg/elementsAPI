const elementsModel = require('../db/schemas/elements')

module.exports = {
    arraysEqual: (array1, array2) => {
        if(array1.length !== array2.length) return false
        array1.forEach((element, index) => {
            if(element !== array2[index]) return false
        })
        return true
    },
    schemaAttributes: async () => {
        return await Object.keys(elementsModel.schema.obj)
    },
    getElements: async () => {
        return await elementsModel.find()
    },
    addElement: async (payload) => {
        return await elementsModel.create(payload)
    },
    deleteElement: async (filter) => {
        return await elementsModel.deleteOne(filter)
    },
    updateElement: async (filter, payload) => { 
        return await elementsModel.updateOne(filter, payload)
    }
}