var partyService = require('./../service/party.service');
var jwt = require('./../utils/jwt');
var config = require('./../config');

module.exports = {
    getAllParty: getAllParty,
    getPartyById: getPartyById,
    updateParty: updateParty,
    deleteParty: deleteParty,
    createParty: createParty,
    AddUsersToTheParty: AddUsersToTheParty,
    getAllPartyNotUsed:getAllPartyNotUsed
}

function getInfomationUserUsing(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, function (err, deCodeData) {
            resolve(deCodeData)
        });
    });
}

function getAllPartyNotUsed(req,res){
  
}

function getAllParty(req, res) {
    if (req.query.page && req.query.limt) {
        partyService.getPageParty(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    } else if (req.query.idRestaurant) {
        partyService.getPartyByIdRestaurant(req.params).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        })
    }
    else if(req.query.status){
        partyService.getAllPartyNotUsed(req.query.status).then(function(response){
            res.send(response)
        }).catch(function(err){
            res.send(err)
        });
    }else {
        partyService.getAllParty().then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    }
}

function getPartyById(req, res) {
    partyService.getPartyById(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function updateParty(req, res) {
    var request = req.body;
    request.id = req.params.id;
    partyService.updateParty(request).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function deleteParty(req, res) {
    partyService.deleteParty(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}


function createParty(req, res) {
    getInfomationUserUsing(req.headers[config.TOKEN]).then(function (deCodeData) {
        if (deCodeData) {
            req.body.myId = deCodeData._id;
            req.body.listUser = [];
            partyService.createParty(req.body).then((response) => {
                res.send(response);
            }).catch((err) => {
                res.send(err)
            });
        }
    });
}

function AddUsersToTheParty(req, res) {
    getInfomationUserUsing(req.headers[config.TOKEN]).then(function (deCodeData) {
        if (deCodeData) {
            req.params.myId = deCodeData._id;
            partyService.AddUsersToTheParty(req.params).then((response) => {
                res.send(response);
            }).catch((err) => {
                res.send(err)
            })
        }
    });
}