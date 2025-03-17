import express, { Response, Request } from "express";
import cors from "cors";
import { GetDocument, GetDocumentById } from "./utils/db";
import TechModel from "./dbModels/TechModel";

const router = express.Router();
router.use(cors());

router.get("/tech-items", async (_, res: Response) => {
  const data = await GetDocument(TechModel);
  res.status(200).json(data);
});

router.get("/tech-items/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const selectedItem = await GetDocumentById(TechModel, id);
  if (!selectedItem) {
    res.status(404).json("Item not found");
    return;
  }
  res.status(200).json(selectedItem);
});

export default router;
