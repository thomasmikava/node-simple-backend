import SubjectModel from "../core/models/typegoose/city";
import TYPES from "./types";
import { ContainerModule, interfaces } from "inversify";

const ModelsModules = new ContainerModule((bind: interfaces.Bind) => {
	bind(TYPES.MODELS.Subjects).toConstructor(SubjectModel);
});
export default ModelsModules;
