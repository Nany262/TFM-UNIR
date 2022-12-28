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

    async listRubric(idSubject: string, idKnowledge: string, res: any, next: any) {
        let querySelect = `SELECT I.id_indicator, I.description, I.id_knowledge, I_S.id_student, I_S.superior, I_S.high, I_S.medium, I_S.low
                           FROM public.indicators I
                           LEFT JOIN public.indicators_students I_S ON I.id_indicator = I_S.id_indicator
                           WHERE id_subject=${idSubject} AND id_knowledge='${idKnowledge}'`;
        const client = await getConnection();
        const selectRes = await client.query(querySelect)
        if (selectRes.rows.length != 0) {
            res.json(
                selectRes.rows)
        }
        else { next(boom.notFound('DB empty')) }
    }

}