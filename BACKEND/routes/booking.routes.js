import { Router } from "express";
import { bookProperty } from "../controllers/booking.controller.js";

const bookingRouter = Router();

bookingRouter.post("/", bookProperty)

export { bookingRouter }
