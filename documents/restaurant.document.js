

//-----------------------------------------------------

/**
 * @api {get} api/restaurant/:id GET ONE RESTAURANT
 * @apiDescription API Get one restaurant
 * @apiVersion 0.0.1
 * @apiName restaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant/599545c60548b62a678409b9
 *
 *
 * @apiParam (Request Params) {String} id restaurant id
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
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

//-----------------------------------------------------

/**
 * @api {get} api/restaurant?page=?&&limit=? GET PAGE RESTAURANT 
 * @apiDescription API Get Pgae restaurant
 * @apiVersion 0.0.1
 * @apiName restaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant?page=1&&limit=10
 *
 *
 * @apiParam (Request Query) {Number} page page get
 * @apiParam (Request Query) {Number} limit limit get
 * 
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
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

//-----------------------------------------------------
/**
 * @api {post} api/user CREATE RESTAURANT
 * @apiDescription API Create restaurant
 * @apiVersion 0.0.1
 * @apiName createRestaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * 
 * @apiParam (Request Body) {String} name  name restaurant
 * @apiParam (Request Body) {String} typeFood id TypeFood
 * @apiParam (Request Body) {Number} minPrice minPrice
 * @apiParam (Request Body) {Number} maxPrice maxPrice
 * @apiParam (Request Body) {String} timeStart timeStart
 * @apiParam (Request Body) {String} timeAnd timeAnd
 * @apiParam (Request Body) {String} address address
 * @apiParam (Request Body) {Date} createAt create date
 * 
 * 
 * @apiRequestExample {json} Request:
 *   {
 *         "name": "bánh gạo nếp 1",
            "typeFood": "5b4d611436d25b1f302d71a2",
            "minPrice":40,
            "maxPrice":400000,
            "timeStart": "5h30p",
            "timeAnd": "7h30",
            "address": "610 hà huy giáp"
 *   }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "statusCode": 201,
 *          "message": "RESTAURANT_FOOD_CREATED"
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "TYOE_FOOD_NOT_FOUND"
 * }
 */

 //-----------------------------------------------------

/**
 * @api {put} api/restaurant/:id UPDATE RESTAURANT
 * @apiDescription API Update restaurant
 * @apiVersion 0.0.1
 * @apiName updaterestaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id Restaurant id
* @apiParam (Request Body) {String} name  name restaurant
 * @apiParam (Request Body) {String} typeFood id TypeFood
 * @apiParam (Request Body) {Number} minPrice minPrice
 * @apiParam (Request Body) {Number} maxPrice maxPrice
 * @apiParam (Request Body) {String} timeStart timeStart
 * @apiParam (Request Body) {String} timeAnd timeAnd
 * @apiParam (Request Body) {String} address address
 * @apiParam (Request Body) {Number} lat lat
 * @apiParam (Request Body) {Number} long long
 * @apiParam (Request Body) {String} detail detail
 * @apiParam (Request Body ) {Date} createAt create date
 * 
 * @apiRequestExample {json} Request:
 *    {
 *          "name": "bánh gạo nếp 1",
            "typeFood": "5b4d611436d25b1f302d71a2",
            "minPrice":40,
            "maxPrice":400000,
            "timeStart": "5h30p",
            "timeAnd": "7h30",
            "address": "610 hà huy giáp",
            "lat":121212,
            "long":121212,
            "detail":"aa aa a aaa a"
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *          "image": [],
            "listRate": [],
            "_id": "5b50a13f709922460069131e",
            "name": "bánh gạo nếp 1",
            "typeFood": "5b4d611436d25b1f302d71a2",
            "minPrice": 40,
            "maxPrice": 400000,
            "timeStart": "5h30p",
            "timeAnd": "7h30",
            "address": "610 hà huy giáp",
            "detail":"aa aa a aaa a",
            "createAt": "2018-07-19T14:33:35.933Z",
            "__v": 0,
            "lat": 121212,
            "long": 121212
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

    //----------------------------------------------------- 

/**
 * @api {delete} api/restaurant/:id DELETE RESTAURANT
 * @apiDescription API Delete restaurant
 * @apiVersion 0.0.1
 * @apiName deleterestaurant
 * @apiGroup RESTAURANT
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
 *        "statusCode":201,
 *        "message": "RESTAURANT_FOOD_DELETED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "mesage": "RESTAURANT_NOT_FOUND"
 * }
 */

 //------------------------------

/**
 * @api {post} api/restaurant/rate/:id RATE RESTAURANT
 * @apiDescription API rate restaurant
 * @apiVersion 0.0.1
 * @apiName updateRateRestaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/restaurant/rate/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id Restaurant id
 * @apiSuccess (Request Body 200) {String} rate  review rate restaurant
 * 
 * @apiRequestExample {json} Request:
 *    {
 *          "rate":5
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
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
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

 //-------------------------------------------

 /**
 * @api {post} /public/restaurant/:id IMAGE RESTAURANT
 * @apiDescription API image restaurant
 * @apiVersion 0.0.1
 * @apiName updateImageRestaurant
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/public/restaurant/599545c60548b62a678409b9.png
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id Restaurant id
 * @apiParam (Request files) {form-data} file image restaurant
 *
 *  * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode":201,
 *        "message": "RESTAURANT_FOOD_UPDATED_IMAGE"
 *    }
 * 
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "RESTAURANT_NOT_FOUND"
 * }
 */

 //----------------------------------------------------------
    /**
 * @api {get} api/public/restaurant/:nameImage SHOW IMAGES
 * @apiDescription API show images
 * @apiVersion 0.0.1
 * @apiName ShowImages
 * @apiGroup RESTAURANT
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/public/restaurant/restaurant_1fádasdassabdkjfbaw.png
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "HÌNH ẢNH"
 *    }
 *
 */