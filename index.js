const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

/*
app.get("/", async (request, response) => {
    response.send(await readFile("./home.html", "utf8"));
});
*/
app.get("/", (req, res) => {
  res.send("The Invisible Universe");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("App avilable on http://localhost:3000")
);
