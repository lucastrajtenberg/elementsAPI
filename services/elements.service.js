const elementsModel = require('../db/schemas/elements')

module.exports = {
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