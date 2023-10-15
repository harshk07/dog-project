const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const authRoutes = require("./src/routes/authRoutes")

main()
.then((res) => console.log(res))
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://dog-api:dog-api@cluster0.kq9jlqs.mongodb.net/?retryWrites=true&w=majority")
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(8080, ()=>{
    console.log("Listening on port 8080");
});

