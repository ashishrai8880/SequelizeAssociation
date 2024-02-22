const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
require('./models/index')
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to vinayak's application." });
});
const PORT = process.env.PORT || 8080;

const users = require('./routes/user.routes');
const projects = require('./routes/project.routes');

app.use('/api/users', users);
app.use('/api/projects', projects);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});