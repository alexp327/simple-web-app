const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 7800, () => console.log("Server running..."));
