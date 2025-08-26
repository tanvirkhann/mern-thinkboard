import express from "express"
import cors from "cors"
import dotenv from"dotenv"

import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();


const app=express()
const PORT =process.env.PORT || 5001;

//midlelayer
app.use(cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);



// app.use((req,res,next) =>{
//     console.log("We just  got a new req");
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
app.listen(PORT, ()=> {
    console.log("Server statred on PORT:", PORT);
});
});

