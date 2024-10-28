// write a function to put data in the users table
import {Client} from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:cQ6ODI7RotUE@ep-polished-grass-a19vnmii.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
})

async function insertData() {
    await client.connect();
    const insertQuery = `INSERT INTO latest_users(username,email,password)
            VALUES ($1,$2,$3);
`;
    //         VALUES ("dom","dom@gmail.com","fastandfurious");
    const value = ["dominic Torreto","dom@gmail.com","fastandfurious"];
    const res = await client.query(insertQuery,value);
    console.log("Insertion success:",res);
}

insertData();