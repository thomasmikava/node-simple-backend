"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __importDefault(require("./types"));
const inversify_1 = require("inversify");
const city_1 = __importDefault(require("../core/models/typegoose/city"));
const school_1 = __importDefault(require("../core/models/typegoose/school"));
const ModelsModules = new inversify_1.ContainerModule((bind) => {
    bind(types_1.default.MODELS.City).toConstructor(city_1.default);
    bind(types_1.default.MODELS.School).toConstructor(school_1.default);
});
exports.default = ModelsModules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLW1vZHVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21vZGVscy1tb2R1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLHlDQUF3RDtBQUN4RCx5RUFBc0Q7QUFDdEQsNkVBQTBEO0FBRTFELE1BQU0sYUFBYSxHQUFHLElBQUksMkJBQWUsQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUNuRSxJQUFJLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBUyxDQUFDLENBQUM7SUFDakQsSUFBSSxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLGdCQUFXLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUNILGtCQUFlLGFBQWEsQ0FBQyJ9