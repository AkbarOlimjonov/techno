const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { create } = require("express-handlebars");



const uri = "mongodb+srv://Akbarshox:a121312u@cluster0.1cfxxcc.mongodb.net/techno-shop";

// 63417e3af04588c24c11dde3
// 63417fde7b192a08041e3836

const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: "./views/layouts",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowedProtoMethods: true,
    allowProtoPropertiesByDefault: true,
    allowedProtoProperties: true,
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

const port = normalizePort(process.env.PORT || 3001);

async function dbConnection() {
  await mongoose.connect(uri, () => {
    console.log("MongoDB connected");
  });
}

dbConnection();

// Import routes
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const cardRouter = require("./routes/card");
const homeRouter = require("./routes/home");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

// Routing
app.use("/", homeRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/card", cardRouter);

try {
  app.listen(port, () => {
    console.log("Server working on port ", app.get("port"));
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
