/**
 * @swagger
 * components:
 *  schemas:
 *    SaveEntity:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Entity name
 *      example:
 *        name: Entity name
 *    Entity:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Entity id
 *        name:
 *          type: string
 *          description: Entity name
 *      example:
 *        name: Entity name
 */

/**
 * @swagger
 * tags:
 *   name: Entity
 *   description: Entity management
 */

/**
 * @swagger
 * /api/Entity/List:
 *   get:
 *     tags:
 *       - Entity
 *     summary: Get all entities
 *     description: Get all entities
 *     responses:
 *       200:
 *         description: Get all entities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entity'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/Entity/Get/{id}:
 *  get:
 *     tags:
 *       - Entity
 *     summary: Get an entity
 *     description: Get an entity
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Entity id
 *     responses:
 *       200:
 *         description: Get an entity
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/Entity/Create:
 *  post:
 *     tags:
 *       - Entity
 *     summary: Create an entity
 *     description: Create an entity
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveEntity'
 *     responses:
 *       201:
 *         description: Create an entity
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Entity/Update/{id}:
 *  put:
 *     tags:
 *       - Entity
 *     summary: Update an entity
 *     description: Update an entity
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Entity id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaveEntity'
 *     responses:
 *       200:
 *         description: Update an entity
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/Entity/Delete/{id}:
 *  delete:
 *     tags:
 *       - Entity
 *     summary: Delete an entity
 *     description: Delete an entity
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Entity id
 *     responses:
 *       200:
 *         description: Delete an entity
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
