import express from "express"
import cors from "cors"
import { connectDB } from "./utils/database.js";
import router from "./routes/LinkData.js";

const app = express();

app.use(express.json());
app.use(cors());


connectDB();

app.use('/', router);


app.listen('5050',()=>{
    console.log('Server started successfully: https://localhost:5050')

})
