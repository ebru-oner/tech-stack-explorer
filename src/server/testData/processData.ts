import { InsertDocument } from "../utils/db";
import TechModel from "../dbModels/TechModel";
import document from "./data.json";

export function insertDataToDb() {
  document.map((item) => InsertDocument(TechModel, item).then((result) => console.log(`new tech item insertion to db result:${result}`)));
}
