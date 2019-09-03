import { ContainerModule, interfaces } from "inversify";
import SCHOOLTYPES from "./types";
import { SchoolsController } from "./controller";

const SchoolModules = new ContainerModule((bind: interfaces.Bind) => {
	bind(SCHOOLTYPES.CONTROLLERS.School).to(SchoolsController);
});
export default SchoolModules;
