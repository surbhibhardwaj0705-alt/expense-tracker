import { Router } from "express";
const router = Router();
import {createTransaction,getTransactions} from "../controllers/transactionController.js";

router.post("/", createTransaction);
router.get("/", getTransactions);

export default router;