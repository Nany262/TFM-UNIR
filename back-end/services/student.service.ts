import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class StudentService {
    constructor() { }

    async listBySubject(idSubject: string, res: any, next: any) {

        let querySelect = `SELECT S.id, percentaje, status, "firstName", "lastName"
                           FROM public.students S
                           JOIN public.student_subject SS
                           ON S.id = SS."idStudent" where SS."idSubject"=${idSubject}`;
        try {
            const client = await getConnection();
            const selectRes = await client.query(querySelect)
            if (selectRes.rows.length != 0) {
                res.json(
                    selectRes.rows)
            }
            else { next(boom.notFound('Subject without students assigned')) }
        }
        catch {
            next(boom.unsupportedMediaType('ID have a wrong format'))
        }
        return res
    }
}