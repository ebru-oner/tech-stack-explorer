import mongoose, { Model } from "mongoose";
import { DB_URL } from "../config";

export const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.info("Database is connected!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export const InsertDocument = async <T extends Document>(model: Model<T>, document: Partial<T>): Promise<T> => {
  try {
    const newDocument = new model(document);
    return await newDocument.save();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error while inserting data";
    console.error(errorMessage);
    throw Error;
  }
};

export const GetDocument = async <T extends Document>(model: Model<T>): Promise<T[]> => {
  try {
    return await model.find();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error while retrieving data";
    console.error(errorMessage);
    throw Error;
  }
};

export const GetDocumentById = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
  try {
    return await model.findById<T>(id);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error while retrieving data";
    console.error(errorMessage);
    throw Error;
  }
};

export const DeleteDocument = async <T extends Document>(model: Model<T>, id: string): Promise<void> => {
  try {
    await model.findByIdAndDelete<T>(id);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error while retrieving data";
    console.error(errorMessage);
    throw Error;
  }
};
