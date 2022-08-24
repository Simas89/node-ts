import express from "express";

const app = express();
// @ts-ignores
app.get("/", (req, res) => res.send("Hi there :)"));

const PORT = (process.env.PORT as string) || 4000;
app.listen(PORT, () => {
  console.log("Hey!");
});
