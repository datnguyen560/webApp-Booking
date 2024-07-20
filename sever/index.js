const express = require("express");
const app = express();
const port = 3005;
const router = require("./router/index");
const db = require("./config");
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require("cookie-parser");
dotenv.config();
db.connect();
app.use(cors())
app.use(cookieParser())
app.use(express.json())

router(app);

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
})