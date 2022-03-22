import express from "express";
const router = express.Router();
import {deleteRent, getRent, getRentById, postRent, updateRent } from "./controllerRent.js";

router.get("/", getRent);
router.get("/:id", getRentById)
router.post("/", postRent);
router.delete("/:id", deleteRent)
router.patch("/:id", updateRent)

export default router;