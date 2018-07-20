/**
 * @api {get} api/typefood GET ALL TYPE FOOD
 * @apiDescription API Get all TYPE FOOD
 * @apiVersion 0.0.1
 * @apiName typefood
 * @apiGroup TYPEFOOD
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/typefood
 *
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id typefood id
 * @apiSuccess (Response Body 200) {String} name  name type food
 * @apiSuccess (Response Body 200) {String} createAt create date
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *      "_id": "5b5095800fa8a134e864f2cb",
        "name": "gà quay",
        "createAt": "2018-07-19T13:43:28.278Z",
        "__v": 0
 *    }
 * ]
 */


//-----------------------------------------------------

/**
 * @api {get} api/typefood/:id GET ONE TYPE FOOD
 * @apiDescription API Get one type food
 * @apiVersion 0.0.1
 * @apiName typefood
 * @apiGroup TYPEFOOD
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/typefood/599545c60548b62a678409b9
 *
 *
 * @apiParam (Request Params) {String} id User id
 * 
* @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id typefood id
 * @apiSuccess (Response Body 200) {String} name  name type food
 * @apiSuccess (Response Body 200) {String} createAt create date
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *      "_id": "5b5095800fa8a134e864f2cb",
        "name": "gà quay",
        "createAt": "2018-07-19T13:43:28.278Z",
        "__v": 0
 *    }
 * ]
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "TYPE_FOOD_NOT_FOUND"
 * }
 */

//-----------------------------------------------------

/**
 * @api {post} api/user CREATE TYPE FOOD
 * @apiDescription API Create type food
 * @apiVersion 0.0.1
 * @apiName createtypefood
 * @apiGroup TYPEFOOD
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/typefood
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Body) {String} name name type food
 * 
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "_id": "5b5095800fa8a134e864f2cb",
 *        "name": "gà quay",
 *        "createAt": "2018-07-19T13:43:28.278Z",
 *         "sex":"nam"
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "statusCode": 201,
 *          "message": "TYPE_FOOD_CREATED"
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "TYOE_FOOD_IS_EXIST"
 * }
 */

 //-----------------------------------------------------

/**
 * @api {post} api/user/:id UPDATE TYPEFOOD
 * @apiDescription API Update Typefood
 * @apiVersion 0.0.1
 * @apiName updateTypefood
 * @apiGroup TYPEFOOD
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/typefood/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id type food id
 * @apiParam (Request Body) {String} name Name type food
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "name": "gà quay new",
 *    }
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name type food name
 * @apiSuccess (Response Body 200) {String} createAt create date

 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "_id": "5b5095800fa8a134e864f2cb",
 *        "name": "gà quay new",
 *        "createAt": "2018-07-19T13:43:28.278Z",
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "TYPE_FOOD_NOT_FOUND"
 * }
 */

    //----------------------------------------------------- 

/**
 * @api {delete} api/typefood/:id DELETE TYPE FOOD
 * @apiDescription API Delete TypeFood
 * @apiVersion 0.0.1
 * @apiName deleteTypeFood
 * @apiGroup TYPEFOOD
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/typefood/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id typefood id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode":404,
 *        "message": "TYPE_FOOD_DELETED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "TYPE_FOOD_NOT_FOUND"
 * }
 */