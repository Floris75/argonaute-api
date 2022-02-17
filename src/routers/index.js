const express = require('express');

const {getAllArgonaute, createArgonaute} = require('../controllers/liste_Controller')

const router = express.Router();

router.get('/', async (req, res) => {
    const liste = await getAllArgonaute();
    res.status(200).json(liste);
});
router.post('/argonaute', async (req, res) => {
    const create = await createArgonaute(req.body);
    if (create.result === false) {
        const {nom} = create
        const message = nom + " est déja dans la liste des Argonautes"
        res.status(409).json({message})
    }
    else {
        res.status(200).json({nom: create.nom});
    }
});

module.exports = router;