

/**
 * @api {get} api/party/:id GET ONE PARTY
 * @apiDescription API Get one type food
 * @apiVersion 0.0.1
 * @apiName party
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party/5b4f500cb3f8ba2e24de3177
 *
 *
 *  
 *
 * 
 * @apiParam (Request Params) {String} id party id
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
 *      "message": "PARTY_NOT_FOUND"
 * }
 */

//-----------------------------------------------------

/**
 * @api {post} api/user CREATE PARTY
 * @apiDescription API Create party
 * @apiVersion 0.0.1
 * @apiName createparty
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * 
 * @apiParam (request Body) {String} titel  titel party, event
 * @apiParam (request Body) {String} field field
 * @apiParam (request Body) {Number} numberMax  number user max
 * @apiParam (request Body) {String} timeStart time start
 * @apiParam (request Body) {String} timeEnd  time End
 * @apiParam (request Body) {Date} dateStart date start
 * @apiParam (request Body) {String} idRestaurant id Restaurant
 * 
 * 
 * @apiRequestExample {json} Request:
 *    {
 *          "titel": "ăn ",
            "field": " nhậu",
            "numberMax": 5,
            "timeStart": "7h",
            "dateStart": "2018-07-30T17:00:00.000Z",
            "idRestaurant": "5b4da355dedc7030b83064c1"
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "_id": "5b50ad6d205d29464880cf25",
            "titel": "ăn ",
            "field": " nhậu",
            "numberMax": 5,
            "currentNumber": 1,
            "status": true,
            "timeStart": "7h",
            "dateStart": "2018-07-30T17:00:00.000Z",
            "idRestaurant": "5b4da355dedc7030b83064c1",
            "listUser": [
                {
                    "_id": "5b50ad6d205d29464880cf26",
                    "id": "5b4d577bfa23a111acb45870",
                    "leader": true
                }
            ],
            "createAt": "2018-07-19T15:25:33.468Z",
            "__v": 0
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

 //-----------------------------------------------------

/**
 * @api {post} api/party/:id UPDATE PARTY
 * @apiDescription API Update party
 * @apiVersion 0.0.1
 * @apiName updateParty
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (request Body) {String} titel  titel party, event
 * @apiParam (request Body) {String} field field
 * @apiParam (request Body) {Number} numberMax  number user max
 * @apiParam (request Body) {String} timeStart time start
 * @apiParam (request Body) {String} timeEnd  time End
 * @apiParam (request Body) {Date} dateStart date start
 * @apiParam (request Body) {String} idRestaurant id Restaurant
 * 
 * @apiRequestExample {json} Request:
 *    {
 *          "titel": "mừng sinh nhật",
            "field": " hihi",
            "numberMax": 10,
            "timeStart": "6h",
            "timeEnd":"9h",
            "dateStart": "2018-07-30T17:00:00.000Z",
            "idRestaurant": "5b4da355dedc7030b83064c1"
 *    }
 * 
 * @apiSuccessExample {json} Success-Response:
 *    {
 *       "statusCode":200,
 *      "message": "PARTY_UPDATED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "PARTY_NOT_FOUND"
 * }
 */

    //----------------------------------------------------- 

/**
 * @api {delete} api/party/:id DELETE PARTY
 * @apiDescription API Delete party
 * @apiVersion 0.0.1
 * @apiName deleteparty
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id party id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode":200,
 *        "message": "PARTY_DELETED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "PARTY_NOT_FOUND"
 * }
 */

 //-----------------------------------------------
 
/**
 * @api {delete} api/party/joinParty:id DELETE PARTY
 * @apiDescription API Delete join party
 * @apiVersion 0.0.1
 * @apiName delete join party
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party/joinParty/:id
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id party id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *    "listUser": [
 *      {
 *            "_id": "5b595299abf652459c662ee9",
 *            "id": "5b51a2cb20cdeb044083013b",
 *            "leader": true
 *      },
 *        {
 *            "_id": "5b6511a35d0d7a00208195d1",
 *            "id": "5b56b004906ae50020888ce0",
            "leader": false
        }
    ],
    "_id": "5b595299abf652459c662ee8",
    "titel": "test fix date ",
    "field": "Mô tả",
    "numberMax": 5,
    "currentNumber": 2,
    "status": false,
    "timeStart": "5h30",
    "timeEnd": "6h30",
    "dateStart": "2018-06-25T17:00:00.000Z",
    "idRestaurant": "5b5459837c82af0020002fb4",
    "createAt": "2018-07-26T04:48:25.080Z",
    "__v": 5
}
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *       "statusCode": 404,
 *       "message": "PARTY_NOT_FOUND"
 * }
 */
//----------------------------------------

 /**
 * @api {post} api/party/:id JOIN USER PARTY
 * @apiDescription API 
 * @apiVersion 0.0.1
 * @apiName JoinUserParty
 * @apiGroup PARTY
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/party/joinParty/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request Params) {String} id party id
 * 
 * @apiSuccessExample {json} Success-Response:
 *    {
 *       "statusCode":200,
 *      "message": "USER_REGISTERED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "PARTY_NOT_FOUND"
 * }
 * 
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 * 
 * @apiError (Response Body 400) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":400,
 *      "message": "PARTY_ALREADY_FULL"
 * }
 */