const { Router } = require("express");
const authenticator = require('../middleware/authenticator');

const usersControllers = require("../controllers/users.js");

const usersRouter = Router();

usersRouter.post("/register", usersControllers.register);
usersRouter.post("/login", usersControllers.login);
usersRouter.get("/validate-token", usersControllers.tokenValidation);
usersRouter.get("/stats", authenticator, usersControllers.showStats);
usersRouter.post("/save", authenticator, usersControllers.saveLocation);
usersRouter.get("/retrieve", authenticator, usersControllers.getSavedLocations);
usersRouter.post("/recommend", authenticator, usersControllers.recommendLocation);
usersRouter.get("/recommendations", authenticator, usersControllers.getRecommendations);


module.exports = usersRouter;