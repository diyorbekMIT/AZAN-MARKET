import express, {Request, Response} from "express";
import memberController from "./controllers/member.controller";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();


routerAdmin.get('/', restaurantController.goHome); //EJS
routerAdmin
  .get('/login', restaurantController.getLogin)
  .post('/login', restaurantController.processLogin);
routerAdmin
  .get('/signup', restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get('/check-auth', restaurantController.checkAuth);

routerAdmin.get('/logout', restaurantController.logout);


export default routerAdmin;

