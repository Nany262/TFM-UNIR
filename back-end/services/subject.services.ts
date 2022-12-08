import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class SubjectService {
    constructor() { }

    listAll() { }

    async findByTeacher(id: string, res: any, next: any) {

        let querySelect = `SELECT * FROM subjects WHERE teacher_assigned =${id}`;
        try {
            const client = await getConnection();
            const selectRes = await client.query(querySelect)
            if (selectRes.rows.length != 0) {
                res.json(
                    selectRes.rows)
            }
            else { next(boom.notFound('User without subjects assigned')) }
        }
        catch {
            next(boom.unsupportedMediaType('ID have a wrong format'))
        }
        return res
    }
}