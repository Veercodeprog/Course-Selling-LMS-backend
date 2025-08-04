const express = require("express");
const app = express();
const port = 3000;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});
app.get("/courses", function (req, res) {
  res.json({
    message: "all courses  endpoint",
  });
});

app.get("/user/purchases", function (req, res) {
  res.json({
    message: "all purchases coures endpoint",
  });
});
app.post("/course/purchase", function (req, res) {
  res.json({
    message: "when a user purchase a course endpoint",
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
