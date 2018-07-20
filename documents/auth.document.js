/**
 * @api {post} api/user AUTH LOGIN
 * @apiDescription API login
 * @apiVersion 0.0.1
 * @apiName loginUser
 * @apiGroup AUTH
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/auth/login
 *
 *
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * 
 * @apiParam (Request Body) {String} email  email user
 * @apiParam (Request Body) {String} password password user
 * 
 * 
 * @apiRequestExample {json} Request:
 *   {
 *         "email": "bob.minhvuong@123@gmail.com,
            "password": "123",
 *   }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmllbmQiOltdLC
 *                  JfaWQiOiI1YjUxYTJjYjIwY2RlYjA0NDA4MzAxM2IiLCJlbWFpbCI6ImJvYi5taW5odnVvbm
 *                  AZ21haWwuY29tIiwibmFtZSI6Im1pbmh2dW9uZyIsInNleCI6Im5hbSIsInBob25lIjoiMTIzN"
 *    }
 * 
 * 
 * @apiErrorExample {json} Error-400-Response:
 *  {
 *      "statusCode": 400,
 *      "message": "PASS_WRONG"
 * }
 * 
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "statusCode": 404,
 *      "message": "EMAIL_NOT_FOUND"
 * }
 */
