import mongoose from "mongoose";
import { TechItem } from "./TechItem";

export interface TechItemDocument extends TechItem, Document {}

const TechSchema = new mongoose.Schema<TechItemDocument>({
  title: { type: String, required: true },
  description: { type: String, required: false },
});

const TechModel = mongoose.model<TechItemDocument>("Tech", TechSchema);

export default TechModel;
