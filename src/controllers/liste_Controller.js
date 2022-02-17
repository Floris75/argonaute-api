const Liste = require('../models/liste');

const listeController = {
    getAllArgonaute: async () => {
        const liste = await Liste.findAll();
        return liste[0];
    },
    createArgonaute: async (body) => {
        const {nom} = body
        const argonaute = await Liste.findOne(nom);
        if (argonaute[0] == true) {
            const create = {result: false, nom}
            return create
        }
        else {
            await Liste.createOne(nom);
            const create = {result: true, nom}
            return create;
        }
    }
}

module.exports =listeController