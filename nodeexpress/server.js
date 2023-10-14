const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
require('dotenv').config();
const app = express();
const db = require("./models");
const Role = db.role;
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "user-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
);
const url=process.env.MONGO_URL;
// simple route
db.mongoose
  .connect(`${url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
 // Assuming you've imported the 'Role' model

  async function initializeRoles() {
    try {
      const count = await Role.estimatedDocumentCount();
  
      if (count === 0) {
        await new Role({ name: "user" }).save();
        console.log("Added 'user' to roles collection");
  
        await new Role({ name: "moderator" }).save();
        console.log("Added 'moderator' to roles collection");
  
        await new Role({ name: "admin" }).save();
        console.log("Added 'admin' to roles collection");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  
  initializeRoles();
  
}
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our hrm portal" });
});

// set port, listen for requests
const PORT = process.env.PORT||8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
