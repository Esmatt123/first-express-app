const express = require("express")
const app = express();
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json({person: {name: "Sixten", age: "3", gender: "male"},
            toys: ["car", "ball", "teddy bear"]})
})
app.listen(8080,() => {
    console.log("server is running on 8080")
} )