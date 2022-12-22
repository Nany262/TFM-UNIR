import boom from '@hapi/boom';
import { getConnection } from "../libs/postgres";

export class TeacherService {
    constructor() { }

    async listAll(res: any, next: any) {
        let response = []
        let querySelect = `SELECT id, email,"firstName", "lastName"
                            FROM public.users where role = 'T'`;
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            for (let t of selectRes.rows) {
                response.push({
                    id: t.id,
                    email: t.email,
                    firstName: t.firstName,
                    lastName: t.lastName,
                    subjects: await this.subjects(t.id)
                })
            }
            res.json(
                response)
        }
        else { next(boom.notFound('DB empty')) }
    }

    async subjects(teacherId: number) {
        let querySelect = `SELECT name, progress
                            FROM public.subjects WHERE teacher_assigned =${teacherId}`;
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            return selectRes.rows;
        }
    }
}