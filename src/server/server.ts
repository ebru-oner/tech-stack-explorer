import express from "express";
import { connectDb, GetDocument, GetDocumentById } from "./utils/db";
import { PORT, SERVER_URL } from "./config";
import router from "./apiRoutes";

const server = express();
server.use("/api", router);
connectDb();

// insertDataToDb();

server.listen(PORT, () => {
  console.info(`server is running at ${SERVER_URL}`);
});
