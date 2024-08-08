import app from "./app.js";
import mongoose from "mongoose";


const port = 3000;

app.listen(port, () => {

  mongoose.connect(
    "mongodb+srv://user:senha@api.e1s5qc8.mongodb.net/?retryWrites=true&w=majority&appName=Api"
  );
  console.log(`servidor rodando na porta http://localhost:${port}`);
});
