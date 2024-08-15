import express, {Request, Response} from "express";
import memberController from "./controllers/member.controller";
import restaurantController from "./controllers/restaurant.controller";
const router = express.Router();


router.get('/admin', restaurantController.goHome); //SPA: REACT
router.get('/', memberController.goHome); //SPA: REACT

export default router;

