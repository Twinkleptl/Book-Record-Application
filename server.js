/*const {users}=require("./data/users.json");
const {books}=require("./data/books.json");*/

const express = require("express");
const dotenv=require("dotenv");

dotenv.config();

const userRouter = require("./routes/users.js");
const booksRouter = require("./routes/books");

const app=express();
const DbConnection=require("./databaseConnection");
DbConnection();
const PORT = 8081;

app.use(express.json());

// http://localhost:8081/users/
http: app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
    data: "hey",
  });
});

app.use("/users", userRouter);
app.use("/books", booksRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route doesn't exits",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
/*const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://Book-Record-Application:Book-Record-Application@cluster0.iudmf1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('DEMO');
    const movies = database.collection('demo');
    // Query for a movie that has the title 'Back to the Future'
    await database.collection('demo').deleteOne({ shape:"round" });

  
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
