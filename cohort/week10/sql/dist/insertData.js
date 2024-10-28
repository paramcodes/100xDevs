"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to put data in the users table
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:cQ6ODI7RotUE@ep-polished-grass-a19vnmii.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const insertQuery = `INSERT INTO latest_users(username,email,password)
            VALUES ($1,$2,$3);
`;
        //         VALUES ("dom","dom@gmail.com","fastandfurious");
        const value = ["dominic Torreto", "dom@gmail.com", "fastandfurious"];
        const res = yield client.query(insertQuery, value);
        console.log("Insertion success:", res);
    });
}
insertData();
