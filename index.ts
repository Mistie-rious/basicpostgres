import express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import bodyParser  from "body-parser";
// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use('/api/user', userRoute)

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});