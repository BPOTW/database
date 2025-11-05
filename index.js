import express from "express"
import cors from "cors"
import { connectDB } from "./utils/database.js";
import router from "./routes/LinkData.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin:['http://database-production-f40d.up.railway.app']
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


connectDB();

app.use('/', router);


app.listen('5000',()=>{
    console.log('Server started successfully: https://localhost:5050')

})
