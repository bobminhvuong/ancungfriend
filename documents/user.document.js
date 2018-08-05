/**
 * @api {get} api/user GET ALL USER
 * @apiDescription API Get all user
 * @apiVersion 0.0.1
 * @apiName getAllUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} phone phone
 * @apiSuccess (Response Body 200) {Date} birtdate birtdate
 * @apiSuccess (Response Body 200) {String} sex sex
 * @apiSuccess (Response Body 200) {String} address address
 * @apiSuccess (Response Body 200) {String} image image
 * @apiSuccess (Response Body 200) {String} friend friend
 * @apiSuccess (Response Body 200) {Date} createAt Created At
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
        "friend": [
            {
                "_id": "5b4d57d2fa23a111acb45874",
                "id": "5b4d577bfa23a111acb45870",
                "follow": true
            },
            {
                "_id": "5b4d5ac9c18fd71f40bb9cab",
                "id": "5b4d578efa23a111acb45873",
                "follow": true
            }
        ],
        "_id": "5b4d577bfa23a111acb45870",
        "email": "bob.minhvuong@gmail.com",
        "name": "vuong",
        "salt": "0JyMHNrmbfa4FCRfKhbS",
        "password": "/AJgU9V1lb+0Pdg0COnUJFwGCA7jn3LqC+x4s+nwIZ5cVfpUCKMKxdZ17wdGE1AWnIkfV7cHkGwhSOtB+bx/QOQT7NRqjdrYfJnCgy2LCm4Ne4Wyv78wTzEf6pDgtriA7WLXW3n5st3keJQjQRiboPuSsx/5Bj8eAUgq4aIvqXY=",
        "sex": "nam111",
        "phone": "1699994511",
        "birtdate": "2018-07-12T17:00:00.000Z",
        "__v": 2,
        "image": "avatar_5b4d577bfa23a111acb45870.png"
 *    },
 *     {
        "friend": [],
        "_id": "5b4d5782fa23a111acb45871",
        "email": "bob.minhvuong1@gmail.com",
        "name": "vuong",
        "salt": "04uTG0Lujt3wjP0IzkvV",
        "password": "UY4oeGVm5uwD4HfcRpXO6u9MZ0w22E8Af/dxDvFk8Bx8h8Vc7Ya1IlOzKMaCwMvFelJDnT2SCVcxbisv2y6ZEVNXX8MdprP1nsd34IYtFqmk17RFmYr4SbL6yhV0WJTWAc1ndaR9UHEexm+7GgJHFNnYCOQw7rgluboHiTMtyNQ=",
        "sex": "nam111",
        "phone": "1699994511",
        "birtdate": "2018-07-12T17:00:00.000Z",
        "__v": 0
    }
 * ]
 */


//-----------------------------------------------------

/**
 * @api {get} api/user/:id GET ONE USER
 * @apiDescription API Get one user
 * @apiVersion 0.0.1
 * @apiName getUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * 
* @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} phone phone
 * @apiSuccess (Response Body 200) {String} rate rate
 * @apiSuccess (Response Body 200) {String} birtdate birtdate
 * @apiSuccess (Response Body 200) {String} sex sex
 * @apiSuccess (Response Body 200) {String} address address
 * @apiSuccess (Response Body 200) {String} image image
 * @apiSuccess (Response Body 200) {String} friend friend
 * @apiSuccess (Response Body 200) {Date} createAt Created At
 *
 * @apiSuccessExample {json} Success-Response:
 *     {
        "friend": [
            {
                "_id": "5b4d58f3495e240b085aed6d",
                "id_friend": "5b4d5782fa23a111acb45871",
                "follow": true
            },
            {
                "_id": "5b4d5a641f152b12a873d575",
                "id_friend": "5b4d5787fa23a111acb45872",
                "follow": true
            },
            {
                "_id": "5b4d5ac9c18fd71f40bb9caa",
                "id_friend": "5b4d577bfa23a111acb45870",
                "follow": true
            }
        ],
        "_id": "5b4d578efa23a111acb45873",
        "email": "bob.minhvuong3@gmail.com",
        "name": "vuong",
        "salt": "sTXqXyo9B68IxNHY38H5",
        "password": "jG8UTJSpVby7/XvLe6lFVYDDMtLJz7D263VSwWSBaoCiRwJxBEOXNDfSFSbD0WSRuRTteaErJme6xtMpYS1otO+wkovTqXBJVy0f5EJ3+/1LBsqm2rrePProwPg0Xe83iYFXAur0GyPNchKaSCkp+m2m/mdMyu8ACtHlpgJN8hU=",
        "sex": "nam111",
        "phone": "1699994511",
        "birtdate": "2018-07-12T17:00:00.000Z",
        "__v": 3
    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "USER_NOT_FOUND"
 * }
 */

//-----------------------------------------------------

/**
 * @api {put} api/user CREATE USER
 * @apiDescription API Create user
 * @apiVersion 0.0.1
 * @apiName createUser
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user
 *
 *
 * @apiParam (Request Body) {String} email Email
 * @apiParam (Request Body) {String} password Password
 * @apiParam (Request Body) {String} name Name
 * @apiParam (Request Body) {String} phone phone
 * @apiParam (Request Body) {String} sex gender
 * 
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "email": "minhvuong@gmail.com",
 *        "name": "vuong 123",
 *        "password": "123",
 *        "phone":"12333333333",
 *         "sex":"nam"
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "statusCode": 201,
 *          "message": "USER_CREATE"
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "USER_EXIST"
 * }
 */
//------------------------------------------------------

 /**
 * @api {put} api/user CREATE ADMIN
 * @apiDescription API Create Admin
 * @apiVersion 0.0.1
 * @apiName createAdmin
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/admin
 *
 *
 * @apiParam (Request Body) {String} email Email
 * @apiParam (Request Body) {String} password Password
 * @apiParam (Request Body) {String} name Name
 * @apiParam (Request Body) {String} phone phone
 * @apiParam (Request Body) {String} sex gender
 * 
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "email": "minhvuong@gmail.com",
 *        "name": "vuong 123",
 *        "password": "123",
 *        "phone":"12333333333",
 *         "sex":"nam"
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "statusCode": 201,
 *          "message": "USER_CREATE"
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "USER_EXIST"
 * }
 */

 //-----------------------------------------------------

/**
 * @api {put} api/user/:id UPDATE USER
 * @apiDescription API Update User
 * @apiVersion 0.0.1
 * @apiName updateUser
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * @apiParam (Request Body) {String} name Name
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "email": "minhvuong@gmail.com",
 *        "name": "vuong",
 *        "password": "123",
 *        "phone":"12333333333",
 *        "birtdate":"2018-8-12",
 *        "sex":"nam",
 *        "address":"hoàng văn thụ"
 *    }
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} birtdate birtdate
 * @apiSuccess (Response Body 200) {String} sex sex
 * @apiSuccess (Response Body 200) {String} address address
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "_id": "599545c60548b62a678409b9",
 *        "email": "minhvuong@gmail.com",
 *        "name": "vuong 12345",
 *        "password": "123",
 *        "createdDate": "2017-08-17T07:29:10.635Z",
 *        "__v": 0,
 *        "role": "User"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  { 
 *      "statusCode":404,
 *      "message": "USER_NOT_FOUND"
 * }
 */

    //----------------------------------------------------- 

/**
 * @api {delete} api/user/:id DELETE USER
 * @apiDescription API Delete User
 * @apiVersion 0.0.1
 * @apiName deleteUser
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode":404,
 *        "message": "USER_DELETED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "mesage": "USER_NOT_FOUND"
 * }
 */

 //--------------------------------------------------------

 /**
 * @api {post} api/avatar UPADTE AVATAR
 * @apiDescription API Update Avatar User
 * @apiVersion 0.0.1
 * @apiName avatar
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/avatar
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request form-data) {files} file file image
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode":201
 *        "message": "USER_AVATAR_UPDATED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode":404,
 *      "message": "USER_NOT_FOUND"
 * }
 */

 //-----------------------------------------------------------

  /**
 * @api {post} api/addfriend ADDFRIEND
 * @apiDescription API addfriend
 * @apiVersion 0.0.1
 * @apiName addfriend
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/addfriend/:id
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request Params) {String} id User id
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode": 200,
          "message": "MAKE_FRIEND_SUCCES"
 *    }
 *
 * @apiError (Response Body 401) {String} message Error message
 * @apiErrorExample {json} Error-401-Response:
 *  {
 *      "statusCode": 400,
        "message": "USER_EXIST"
 * }
 */

 //------------------------------------------------

 
  /**
 * @api {delete} api/addfriend DELETEFRIEND
 * @apiDescription API deletefriend
 * @apiVersion 0.0.1
 * @apiName delete friend
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/addfriend/:id
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request Params) {String} id User id
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
        "friend": [],
        "_id": "5b66b3fca2ce753428c8656d",
        "email": "vuong1@gmail.com",
        "name": "GalaxyPham",
        "salt": "CxAFCGvmRD0lfrgZWqei",
        "password": "C9fjSiaMUoiZVZVwL/y1ZzSvwVqzwC9/BOJZhIIBBScJj4Y6kt155Lki8K9WzdxSzER9nfIZgsZP2SJO+BHRaFwi9xDYCP7H8wT20h10hyZYebxIh9Sb/EcLAaloyJg14HNKbLC2xUWa5FH5o+uFhmnqlyGkMnPgmmbd6UUp2qQ=",
        "sex": "male",
        "phone": "949022004",
        "role": "USER",
        "createAt": "2018-08-05T08:23:24.094Z",
        "__v": 21
    }
 *
 * @apiError (Response Body 401) {String} message Error message
 * @apiErrorExample {json} Error-401-Response:
 *  {
 *      "statusCode": 400,
        "message": "USER_EXIST"
 * }
 */

 //------------------------------------------------
   /**
 * @api {post} api/user/sendemail SEND MAIL
 * @apiDescription API send mail (gửi lời mời đến ứng dụng)
 * @apiVersion 0.0.1
 * @apiName sendemail
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/sendemail
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request mail) {String} mail User Email User
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode": 202,
 *        "message": "SENT_MAIL_SUCCESSFULLY"
 *    }
 *
 * @apiError (Response Body 401) {String} message Error message
 * @apiErrorExample {json} Error-401-Response:
 *  {
 *      "statusCode": 401,
        "message": "EMAIL_INVALID"
 * }
 */

 
 //------------------------------------------------
   /**
 * @api {post} api/user/invitefriend INVITEFRIEND MAIL
 * @apiDescription API send mail (gửi lời mời đến party)
 * @apiVersion 0.0.1
 * @apiName invitefriend
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/invitefriend
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * @apiParam (Request mail) {String} mail User Email User Invite Friend
 * @apiParam (Request idParty) {String} idParty id Party 
 * 
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "statusCode": 202,
 *        "message": "SENT_MAIL_SUCCESSFULLY"
 *    }
 *
 * @apiError (Response Body 401) {String} message Error message
 * @apiErrorExample {json} Error-401-Response:
 *  {
 *      "statusCode": 401,
        "message": "EMAIL_INVALID"
 * }
 */

 //------------------------------------------------
   /**
 * @api {get} api/public/avatar/:nameImage SHOW IMAGES
 * @apiDescription API show images
 * @apiVersion 0.0.1
 * @apiName ShowImages
 * @apiGroup User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/public/avatar/avatar_1fádasdassabdkjfbaw.png
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

