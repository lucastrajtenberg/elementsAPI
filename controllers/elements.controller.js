const elementsService = require('../services/elements.service')

module.exports = {
    getElements: async (req, res, next) => {
        const data = await elementsService.getElements()
        res.send(data)          
    },
    //añadir una verificacion de que si no respeta el esquema no agregue el objeto. PREGUNTARLE A MANU POR LAS DUDAS
    addElement: async (req, res, next) => {
        const payload = req.body
        if(Object.keys(payload).length === 0) res.send("Payload doesn't exist")
        const data = await elementsService.addElement(payload)
        res.send(data)      
    },
    deleteElement: async (req, res, next) => {
        const _id = req.params.id
        console.log(_id)
        const idObject = {
            _id
        }
        const data = await elementsService.deleteElement(idObject)
        const {deletedCount} = data
        if(deletedCount == 0) res.send("Couldn't delete element")
        else res.send(data)
    },
    // router.put('/update/:id', elementsController.updateElement)
    updateElement: async (req, res, next) => {
        const payload = req.body
        const _id = req.params.id

        if(_id === null) res.send('The submited id is null')
        var schemaKeys = await elementsService.schemaAttributes()
        if(!elementsService.arraysEqual(Object.keys(payload), schemaKeys)){
             res.send('The submited element structure is different from the schema')
        }else
        {
            const data = await elementsService.updateElement({_id}, payload)
            res.send(data)
        }
    },
    modifyElement: async (req, res, next) => {
        const payload = req.body
        const _id = req.params.id
        if(_id === null) res.send('The submited id is null')
        const data = await elementsService.updateElement({_id}, payload)
        res.send(data)
    }
}