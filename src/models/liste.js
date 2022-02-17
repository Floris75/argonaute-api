const query = require('../db');

exports.findAll = async () => {
    const liste = await query('SELECT nom_argonaute FROM Liste ORDER BY nom_argonaute;');
    return liste 
}

exports.findOne = async (nom) => {
    const liste = await query(`SELECT nom_argonaute FROM Liste WHERE nom_argonaute = "${nom}";`);
    return liste 
}

exports.createOne = async (nom) => {
    const create = await query(`INSERT INTO Liste(nom_argonaute) VALUES ("${nom}");`)
    return create
}