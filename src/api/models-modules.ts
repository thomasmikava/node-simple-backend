import TYPES from "./types";
import { ContainerModule, interfaces } from "inversify";
import CityModel from "../core/models/typegoose/city";
import SchoolModel from "../core/models/typegoose/school";

const ModelsModules = new ContainerModule((bind: interfaces.Bind) => {
	bind(TYPES.MODELS.City).toConstructor(CityModel);
	bind(TYPES.MODELS.School).toConstructor(SchoolModel);
});
export default ModelsModules;
