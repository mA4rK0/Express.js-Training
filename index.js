//* How to run the program : nodemon index.js

const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got request");
//   console.dir(req);
//   console.dir(res);

//   res.send("<h1>Hello World</h1>");
// });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Homepage</h1>");
});

app.get("/cats", (req, res) => {
  res.send("this is cats page");
});

app.post("/cats", (req, res) => {
  res.send("this is post cats page");
});

//* Dynamic Route

app.get("/blog/:judul", (req, res) => {
  //   console.log(req.params);
  //   res.send("ini halaman blog");

  const { judul } = req.params;
  res.send(`ini halaman yang berjudul : ${judul}`);
});

app.get("/blog/:judul/:tag/:author", (req, res) => {
  const { judul, tag, author } = req.params;
  res.send(`ini halaman yang berjudul : ${judul} | tag : ${tag} | author : ${author}`);
});

app.get("/search", (req, res) => {
  //   console.log(req.query);

  const { q } = req.query;

  if (!q) {
    res.send("<h1>search keyword not found</h1>");
  }
  res.send(`<h1>search keyword : ${q} </h1>`);
});

// ! Ini muncul ketika halaman tidak ditemukan. Jangan taruh di paling atas atau semua page menjadi 'halaman tidak ditemukan'

app.get("*", (req, res) => {
  res.send("halaman tidak ditemukan");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
