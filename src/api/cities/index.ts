import { ContainerModule, interfaces } from "inversify";
import { CitiesController } from "./controller";
import CITYTYPES from "./types";

const CityModules = new ContainerModule((bind: interfaces.Bind) => {
	bind(CITYTYPES.CONTROLLERS.City).to(CitiesController);
});
export default CityModules;
