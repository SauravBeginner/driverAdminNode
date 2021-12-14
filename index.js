const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressFileUpload = require("express-fileupload");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

//Database - Connection
mongoose.connect(
  "mongodb+srv://saurav:Ow8QC6Rbqqgee3jq@cluster0.aofdk.mongodb.net/driverbook?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true }
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const customer_r = require("./route/customer_r");
const driver_r = require("./route/driver_r");
// app.get("/", (req, res) => {
//   res.json({ msg: `Hi Server!` });
//   console.log("Hi Server!");
// });
app.use(bodyParser.json());
app.use(expressFileUpload());
app.use(cors());
app.use("/customer", customer_r);
app.use("/driver", driver_r);

app.listen(PORT, (err) => {
  console.log(`Server running at ${PORT}`);
});
