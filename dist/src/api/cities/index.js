"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const controller_1 = require("./controller");
const types_1 = __importDefault(require("./types"));
const CityModules = new inversify_1.ContainerModule((bind) => {
    bind(types_1.default.CONTROLLERS.City).to(controller_1.CitiesController);
});
exports.default = CityModules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2NpdGllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUF3RDtBQUN4RCw2Q0FBZ0Q7QUFDaEQsb0RBQWdDO0FBRWhDLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQWUsQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUNqRSxJQUFJLENBQUMsZUFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsNkJBQWdCLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMsQ0FBQztBQUNILGtCQUFlLFdBQVcsQ0FBQyJ9