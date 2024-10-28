// write a function to create a users table in your database
import {Client} from 'pg';

const client = new Client({
    // host:'my.database-server.com',
    // port:5334,
    // database:'database-name',
    // user:'database-user',
    // password:'secretpassword!!',
    connectionString: "postgresql://neondb_owner:cQ6ODI7RotUE@ep-polished-grass-a19vnmii.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
})

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE latest_users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
    `);
    console.log(result);
}

createUsersTable();