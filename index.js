import express from "express"
import cors from "cors"
import { connectDB } from "./utils/database.js";
import router from "./routes/LinkData.js";
import { connectRedis } from "./utils/redis.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin:"*",
  methods: ["GET", "POST"],
}));


connectDB();
connectRedis();

app.use('/', router);


app.listen('5000',()=>{
    console.log('Server started successfully: https://localhost:5050')

})
