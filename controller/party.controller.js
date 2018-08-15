var partyService = require('./../service/party.service');
var userService = require('./../service/user.service');
var jwt = require('./../utils/jwt');
var config = require('./../config');

module.exports = {
    getAllParty: getAllParty,
    getPartyById: getPartyById,
    updateParty: updateParty,
    deleteParty: deleteParty,
    createParty: createParty,
    AddUsersToTheParty: AddUsersToTheParty,
    getAllPartyNotUsed: getAllPartyNotUsed,
    deleteUsersToTheParty: deleteUsersToTheParty,
    invitefriend: invitefriend
}
function invitefriend(req, res) {
    getInfomationUserUsing(req.headers[config.TOKEN]).then(function (deCodeData) {
        if (deCodeData) {
            req.params.myId = deCodeData._id;
            req.body.myId = deCodeData._id;
            partyService.invitefriend(req.params, req.body).then((response) => {
                if (response) {
                    userService.getUserById({ id: req.body.idUser }).then((result) => {
                        if (result) {
                            console.log(result);
                            userService.inviteFriend({ myId: deCodeData._id, email: result.email, idParty: response._id, linkUrl: req.linkUrl }).then((resulmail)=>{
                                res.send({
                                    result:result,
                                    message:resulmail
                                });
                            }).catch((err)=>{
                                reject({
                                    result:result,
                                    message:err
                                })
                            });
                        }
                    })
                }
            }).catch((err) => {
                res.send(err)
            })
        }
    });
}
function deleteUsersToTheParty(req, res) {
    getInfomationUserUsing(req.headers[config.TOKEN]).then(function (deCodeData) {
        if (deCodeData) {
            req.params.myId = deCodeData._id;
            partyService.deleteUsersToTheParty(req.params).then((response) => {
                res.send(response);
            }).catch((err) => {
                res.send(err)
            })
        }
    });
}

function getInfomationUserUsing(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, function (err, deCodeData) {
            resolve(deCodeData)
        });
    });
}

function getAllPartyNotUsed(req, res) {

}

function getAllParty(req, res) {
    if (req.query.page && req.query.limit) {
        partyService.getPageParty(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    } else if (req.query.idRestaurant) {
        partyService.getPartyByIdRestaurant(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        })
    } else if (req.query.status) {
        partyService.getAllPartyNotUsed(req.query.status).then(function (response) {
            res.send(response)
        }).catch(function (err) {
            res.send(err)
        });
    } else if (req.query.public) {
        partyService.getPartyByPublic(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    } else {
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
            req.body.listUserBeInvite = [];
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
// function AddUsersBeInvite(req, res) {
//     userService.getUserById(req._id).then(function (deCodeData) {
//         if (deCodeData) {
//             req.params.myId = deCodeData._id;
//             partyService.AddUsersBeInvite(req.params).then((response) => {
//                 res.send(response);
//             }).catch((err) => {
//                 res.send(err)
//             })
//         }
//     });
// }