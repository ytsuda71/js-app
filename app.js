const PORT = process.env.PORT;
const path = require("path");
const express = require("express");
const app = express();

// Express Settings
app.set("view engine", "ejs");

// Static resource routing
app.use("/public", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/index.js"));

//Execute web application
app.listen(PORT, () => {
  console.log(`Application listening at ${PORT}`);
});
