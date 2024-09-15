// This is the code that will run on the Server Backend
// Some javascript runs in the clients Web Broswer, this code runs on my Server
// Why "Listening on port:8080" Will display in console and NOT in the clients browser
// This is a HTTP Server, "written" in Javascript

// MiddleWare is software(functions etc...) running in between the Server getting the request and sending the response
// Client(REQ) --> Server(MiddleWare) --> Server(RES)

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const validator = require("express-validator");
const fs = require("node:fs/promises");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post(
  "/api/submitForm",
  validator.checkSchema(require("./utils/validationSchemas.js")),
  async (req, res) => {
    resBody = {
      sucess: false,
      errors: [],
    };

    const validationResult = validator.validationResult(req);

    if (!validationResult.isEmpty()) {
      resBody.errors = validationResult.errors;
      res.status(400).send(resBody);
      return;
    }

    reqBody = validator.matchedData(req); // All data should be validated! This function gives you all the validated data
    console.log(reqBody);

    try {
      await fs.writeFile(
        path.join(__dirname, "../", "database/forms.json"),
        JSON.stringify(reqBody)
      );
      resBody.sucess = true;
    } catch (err) {
      resBody.sucess = false;
      err.msg = "Error: failed to save form";
      resBody.errors.push(err);
      console.error(err);
    }

    res.json(resBody);
  }
);

function validateForm(req, res, next) {
  validator.body("firstName").isEmpty();

  result = validator.validationResult(req);
  console.log(result);

  req.formattedCorrectly = true;
  next(); // IF data is correctly formatted
  return; // next() Does not return the function, next() -> app.post("/api/submitForm") IT FINISHES EXECUTING --back-to--> next()
}

app.listen({ port: 8080, host: "0.0.0.0" }, () => {
  console.log("Listening on port: 8080");
});
