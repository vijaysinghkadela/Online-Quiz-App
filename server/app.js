import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("Good Morning dosto");
});

app.get("/hey", (req, res) => {
  res.send("hey dosto");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
