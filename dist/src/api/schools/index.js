"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("./types"));
const controller_1 = require("./controller");
const SchoolModules = new inversify_1.ContainerModule((bind) => {
    bind(types_1.default.CONTROLLERS.School).to(controller_1.SchoolsController);
});
exports.default = SchoolModules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3NjaG9vbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBd0Q7QUFDeEQsb0RBQWtDO0FBQ2xDLDZDQUFpRDtBQUVqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLDJCQUFlLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDbkUsSUFBSSxDQUFDLGVBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUFpQixDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFDSCxrQkFBZSxhQUFhLENBQUMifQ==