import {createUrl} from "./controller/urlController.js"
import express  from "express";


const router = express.Router();
router.post("/newurl", createUrl)
export default router;