import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class UserService {

    findUser = `SELECT * FROM users WHERE email=`;

    constructor() {
    }

    async updateStatus(email: string, status: boolean, res: any, next: any) {
        const querySelect = this.findUser + `'${email}'`;
        const queryUpdate = `UPDATE users
                            SET is_active = ${status}
                            WHERE email = '${email}'`
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            await client.query(queryUpdate)
            const selectRes = await client.query(querySelect)
            res.json({
                id:selectRes.rows[0].id,
                email: email,
                status: selectRes.rows[0].is_active,
                role: selectRes.rows[0].role
            })
        }
        else { next(boom.unauthorized('Non-existent user')) }
        return res
    }

    delete() { }

}