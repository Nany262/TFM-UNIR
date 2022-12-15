import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class GradeService {
    constructor() { }

    async listAll(res: any, next: any) {
        let querySelect = `SELECT *
                           FROM public.knowledges`;
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            res.json(
                selectRes.rows)
        }
        else { next(boom.notFound('DB empty')) }
    }

}