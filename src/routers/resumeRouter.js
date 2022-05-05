const express = require("express");
const resumeController = require("../controller/resumeController");
const resumeRouter = express.Router();

resumeRouter.get("/get", resumeController.getResume);
resumeRouter.post("/save", resumeController.saveResume);
resumeRouter.delete("/delete/:id", resumeController.deleteResume);
resumeRouter.put("/update/:id", resumeController.updateResume);

module.exports = resumeRouter;
