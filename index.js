import express from "express";
const app = express();
const port = 3000;

app.get("/", (_req,res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (_req,res) => {
    res.send("<h1>About Me</h1><p>My Name is Prince</p>");
});

app.get("/contact", (_req,res) => {
    res.send("<h1>Contact Me</h1><p>Phone : +919289177949");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});