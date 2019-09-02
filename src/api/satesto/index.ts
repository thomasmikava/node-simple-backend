import { ContainerModule, interfaces } from "inversify";
import SatestoController from "./controllers";

const SatestoModules = new ContainerModule((bind: interfaces.Bind) => {
	bind("SatestoController").to(SatestoController);
});
export default SatestoModules;
