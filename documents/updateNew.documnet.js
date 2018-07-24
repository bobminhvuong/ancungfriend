/**
 * @api {get} api/restaurant GET ALL RESTAURANT
 * @apiDescription API Get one restaurant
 * @apiVersion 0.0.1
 * @apiName restaurant
 * @apiGroup UPADATE
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant/599545c60548b62a678409b9
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id typefood id
 * @apiSuccess (Response Body 200) {String} name  name restaurant
 * @apiSuccess (Response Body 200) {String} image list image
 * @apiSuccess (Response Body 200) {String} typeFood id TypeFood
 * @apiSuccess (Response Body 200) {String} timeStart timeStart
 * @apiSuccess (Response Body 200) {String} timeAnd timeAnd
 * @apiSuccess (Response Body 200) {String} address address
 * @apiSuccess (Response Body 200) {String} lat lat
 * @apiSuccess (Response Body 200) {String} long long
 * @apiSuccess (Response Body 200) {String} minPrice minPrice
 * @apiSuccess (Response Body 200) {String} maxPrice maxPrice
 * @apiSuccess (Response Body 200) {String} detail detail
 * @apiSuccess (Response Body 200) {String} averageRate averageRate
 * @apiSuccess (Response Body 200) {String} createAt create date
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *      "image": [],
        "listRate": [
            {
                "_id": "5b4db55690d489190096b555",
                "idUser": "5b4d577bfa23a111acb45870",
                "rate": 10
            },
            {
                "_id": "5b4dcf63df4e88193484b96e",
                "idUser": "5b4d5782fa23a111acb45871",
                "rate": 4
            },
            {
                "_id": "5b4ed65e09ac793284361891",
                "idUser": "5b4ed62609ac793284361890"
            }
        ],
        "_id": "5b4db55690d489190096b554",
        "name": "bánh gạo",
        "typeFood": "5b4d611436d25b1f302d71a2",
        "timeStart": "5h30p",
        "timeAnd": "7h30",
        "address": "610 hà huy giáp",
        "averageRate": 7,
        "__v": 2
 *    }
 * ]
 *
 */
//---------------------------------------------------------------------
 
/**
 * @api {get} api/party?idrestaurant=? GET PARTY BY ID RESTAURANT
 * @apiDescription API type food by idrestaurant
 * @apiVersion 0.0.1
 * @apiName party
 * @apiGroup UPADATE
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party?idrestaurant=5b4f500cb3f8ba2e24de3178
 *
 *
 * @apiParam (Request Query) {String} idrestaurant restaurant id
 * 
* @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id party id
 * @apiSuccess (Response Body 200) {String} titel  titel party, event
 * @apiSuccess (Response Body 200) {String} field field
 * @apiSuccess (Response Body 200) {String} numberMax  number user max
 * @apiSuccess (Response Body 200) {String} currentNumber current Number user 
 * @apiSuccess (Response Body 200) {String} status party active or unactive
 * @apiSuccess (Response Body 200) {String} timeStart time start
 * @apiSuccess (Response Body 200) {String} timeEnd  time End
 * @apiSuccess (Response Body 200) {String} dateStart date start
 * @apiSuccess (Response Body 200) {String} idRestaurant id Restaurant
 * @apiSuccess (Response Body 200) {String} listUser list user participation
 * @apiSuccess (Response Body 200) {String} createAt date create party
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *       "listUser": [
            {
                "_id": "5b4f500cb3f8ba2e24de3178",
                "id": "5b4f500cb3f8ba2e24de3177",
                "leader": true
            },
            {
                "_id": "5b4f508c1fa148122c0e96eb",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50b575565e39708b3522",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50cd3f37653748d34279",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            }
        ],
        "_id": "5b4f500cb3f8ba2e24de3177",
        "titel": "ăn ",
        "field": " nhậu",
        "numberMax": 5,
        "currentNumber": 1,
        "status": true,
        "timeStart": "7h",
        "dateStart": "2018-07-18T17:00:00.000Z",
        "idRestaurant": "5b4da355dedc7030b83064c1",
        "createAt": "2018-07-18T14:34:52.831Z",
        "__v": 3
 *    }
 * ]
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

 //----------------------------------------------------
 

/**
 * @api {get} api/party?page=?&&limit=? GET PARTY BY ID RESTAURANT
 * @apiDescription API Get page type food
 * @apiVersion 0.0.1
 * @apiName party
 * @apiGroup UPADATE
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party?page=1&&limit=10
 *
 *
 * @apiParam (Request query) {String} page page get
 * @apiParam (Request query) {String} limit limit get
 * 
* @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id party id
 * @apiSuccess (Response Body 200) {String} titel  titel party, event
 * @apiSuccess (Response Body 200) {String} field field
 * @apiSuccess (Response Body 200) {String} numberMax  number user max
 * @apiSuccess (Response Body 200) {String} currentNumber current Number user 
 * @apiSuccess (Response Body 200) {String} status party active or unactive
 * @apiSuccess (Response Body 200) {String} timeStart time start
 * @apiSuccess (Response Body 200) {String} timeEnd  time End
 * @apiSuccess (Response Body 200) {String} dateStart date start
 * @apiSuccess (Response Body 200) {String} idRestaurant id Restaurant
 * @apiSuccess (Response Body 200) {String} listUser list user participation
 * @apiSuccess (Response Body 200) {String} createAt date create party
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *       "listUser": [
            {
                "_id": "5b4f500cb3f8ba2e24de3178",
                "id": "5b4f500cb3f8ba2e24de3177",
                "leader": true
            },
            {
                "_id": "5b4f508c1fa148122c0e96eb",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50b575565e39708b3522",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50cd3f37653748d34279",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            }
        ],
        "_id": "5b4f500cb3f8ba2e24de3177",
        "titel": "ăn ",
        "field": " nhậu",
        "numberMax": 5,
        "currentNumber": 1,
        "status": true,
        "timeStart": "7h",
        "dateStart": "2018-07-18T17:00:00.000Z",
        "idRestaurant": "5b4da355dedc7030b83064c1",
        "createAt": "2018-07-18T14:34:52.831Z",
        "__v": 3
 *    }
 * ]
 */

/**
 * @api {get} api/party GET ALL PARTY
 * @apiDescription API Get all PARTY
 * @apiVersion 0.0.1
 * @apiName party
 * @apiGroup UPADATE
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party
 *
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id party id
 * @apiSuccess (Response Body 200) {String} titel  titel party, event
 * @apiSuccess (Response Body 200) {String} field field
 * @apiSuccess (Response Body 200) {StNumberring} numberMax  number user max
 * @apiSuccess (Response Body 200) {Number} currentNumber current Number user 
 * @apiSuccess (Response Body 200) {String} status party active or unactive
 * @apiSuccess (Response Body 200) {String} timeStart time start
 * @apiSuccess (Response Body 200) {String} timeEnd  time End
 * @apiSuccess (Response Body 200) {Date} dateStart date start
 * @apiSuccess (Response Body 200) {String} idRestaurant id Restaurant
 * @apiSuccess (Response Body 200) {String} listUser list user participation
 * @apiSuccess (Response Body 200) {Date} createAt date create party
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *       "listUser": [
            {
                "_id": "5b4f500cb3f8ba2e24de3178",
                "id": "5b4f500cb3f8ba2e24de3177",
                "leader": true
            },
            {
                "_id": "5b4f508c1fa148122c0e96eb",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50b575565e39708b3522",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            },
            {
                "_id": "5b4f50cd3f37653748d34279",
                "id": "5b4ed87ea588892fa8db6590",
                "leader": false
            }
        ],
        "_id": "5b4f500cb3f8ba2e24de3177",
        "titel": "ăn ",
        "field": " nhậu",
        "numberMax": 5,
        "currentNumber": 1,
        "status": true,
        "timeStart": "7h",
        "dateStart": "2018-07-18T17:00:00.000Z",
        "idRestaurant": "5b4da355dedc7030b83064c1",
        "createAt": "2018-07-18T14:34:52.831Z",
        "__v": 3
 *    }
 * ]
 */


//-----------------------------------------------------

