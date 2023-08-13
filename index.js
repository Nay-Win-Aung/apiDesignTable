const express = require("express");
const app = express();
const path = require("path");

app.get("/api/people", function(req, res) {
    const data = [
        { name: "Nay Win Aung", age: 22 },
        { name: "Aye Aye Aung", age: 23 },
        { name: "Thant Tu Ta Kyaw", age: 11 },
    ];
    return res.status(200).json(data);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, function() {
    console.log("Server running at port 8000...");
});
