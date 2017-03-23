const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
app.use((req, res) => res.send(fs.readFileSync(req.originalUrl === "/bundle.js" ? "bundle.js" : "index.html", "UTF-8")));
app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.info(`Server listening on ${port}`);
});
