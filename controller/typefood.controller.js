var typeFoodService = require('./../service/typefood.service');
module.exports = {
    getAllTypeFood: getAllTypeFood,
    getTypeFoodById: getTypeFoodById,
    updateTypeFood: updateTypeFood,
    deleteTypeFood: deleteTypeFood,
    createTypeFood: createTypeFood
}

function getAllTypeFood(req, res) {
    if (req.query.page && req.query.limt) {
        typeFoodService.getPageTypeFood(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    } else {
        typeFoodService.getAllTypeFood().then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    }
}

function getTypeFoodById(req, res) {
    typeFoodService.getTypeFoodById(req.params.id).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function updateTypeFood(req, res) {
    var request = req.body;
    request.id = req.params.id;
    typeFoodService.updateTypeFood(request).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function deleteTypeFood(req, res) {
    typeFoodService.deleteTypeFood(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function createTypeFood(req, res) {
    typeFoodService.createTypeFood(req.body).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}