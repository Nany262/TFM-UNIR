import { Client } from 'pg';

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin1234',
        database: 'grade_report_db'
    })
    await client.connect()
    return client;
}

export {getConnection}