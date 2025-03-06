import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>example@gmail.com</p><br><p>09111333390</p>");
});