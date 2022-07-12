async function getAllTransactions (req, res, next) {
    try {
        const { id, goodName } = req.query; // id a& goodName could be undefined
        const filterExist = id || goodName
        const filterQuery = filterExist ? [id, goodName] : []

        let dataBase = `SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total `;
        dataBase += `FROM transactions t JOIN customers c ON t.id_customer = c.id `
        dataBase += `JOIN goods g ON g.id = t.id_good `
        dataBase += `JOIN suppliers s ON g.id_supplier = s.id `
        dataBase += filterExist ? `WHERE t.id = ? OR g.name = ? ` : '' // this section is optional
        dataBase += `ORDER BY t.id`

        const data = await query(dataBase, [id, goodName]);
    }
    catch(err) {
        
    }
}

/**
 * bikin 1 table user: 
 *  - id: INT
 *  - username: varchar UNIQUE
 *  - firstname: varchar
 *  - lastname: varchar
 *  - password: varchar
 * 
 * 
 * bikin endpoint register;
 * POST user/register
 * payload {
 *      "firstname": "firstname", --> required
 *      "lastname": "lastname", -- required
 *      "username": "blskog", --> required and UNIQUE !!!!
 *      "password": "" -> required, and max 20 character.  must contain lowercase, uppercase, number, and special character (!@#-_*) [BONUSSSSS]
 * }
 * 
 * if success, send 201 with anything
 * if failed at validation, response with error.
 * BONUSES:
 *      - password validation
 *      - body payload validation
 * 
 * 
 * POST user/login
 * 
 * payload:
 * {
 *   "username": "kiubsdvskuvn",
 *   "password": "ikunsivnivfudn"
 * }
 * 
 * if success: response something, e.g WELCOMEEEEEE, firstname lastname !!
 * if username not found, response: username not found
 * if password not match, response: wrong password
 */