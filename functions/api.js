import express, { Router } from "express";
import serverless from "serverless-http";
import app from "../index";

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", app);

export const handler = serverless(api);
