import express, { Application } from "express";
import { appendFile } from "fs";
import { send } from "process";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import cors from "cors";

const port = 4000;
const swaggerSpec = YAML.load(path.join(__dirname, "../swagger/openapi.yaml"));

const app: Application = express();

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ["http://aws-server:4000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
// json body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/unary", (req, res) => {
  console.log(req.body.client_message);

  const result = {
    server_message: `message from web: ${req.body.client_message}`,
  };
  res.json(result);
});

app.get("/adder", (req, res) => {
  let one = req.query.one;
  let two = req.query.two;
  let result = Number(one) + Number(two);
  res.send(String(result));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
