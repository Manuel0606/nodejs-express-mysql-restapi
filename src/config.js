// import {config} from "dotenv";

// config();

// export default {
//     host: process.env.HOST || "",
//     database: process.env.DATABASE || "",
//     user: process.env.USER || "",
//     password: process.env.PASSWORD || ""
// }

export default {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "api-rest-nodejs",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root"
}