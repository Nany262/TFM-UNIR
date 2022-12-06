import { getConnection } from "../libs/postgres";

export class SubjectService {
    constructor() { }
    listAll() { }
    async findByTeacher(email: string) {
        let querySelect = `SELECT * FROM subjects WHERE teacher_assigned =${email}`;
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
    }
}