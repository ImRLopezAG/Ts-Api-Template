/**
 * @swagger
 * components:
 *   schemas:
 *     Authentication:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         token:
 *           type: string
 *       example:
 *         message: Login successful
 *         token: your token
 *     UserLogin:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: User username
 *         password:
 *           type: string
 *           description: User password
 *       example:
 *         username: johnDoe
 *         password: password
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication management
 */

/**
 * @swagger
 * /api/Auth/Login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login
 *     description: Login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
