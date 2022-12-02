import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class UserService {

    constructor() {
    }

    async find(email: string, res: any, next: any) {
        const querySelect = `SELECT * FROM users WHERE email='${email}'`;
        const queryUpdate = `UPDATE users
                            SET is_active = true
                            WHERE email = '${email}'`
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            await client.query(queryUpdate)
            const selectRes = await client.query(querySelect)
            res.json({
                email: email,
                status: selectRes.rows[0].is_active,
                role: selectRes.rows[0].role
            })
        }
        else { next(boom.unauthorized('Non-existent user')) }
        return res
    }

    findOne() { }

    update() { }

    delete() { }

}