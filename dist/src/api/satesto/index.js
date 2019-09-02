"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const controllers_1 = __importDefault(require("./controllers"));
const SatestoModules = new inversify_1.ContainerModule((bind) => {
    bind("SatestoController").to(controllers_1.default);
});
exports.default = SatestoModules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3NhdGVzdG8vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBd0Q7QUFDeEQsZ0VBQThDO0FBRTlDLE1BQU0sY0FBYyxHQUFHLElBQUksMkJBQWUsQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUNwRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMscUJBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUNILGtCQUFlLGNBQWMsQ0FBQyJ9