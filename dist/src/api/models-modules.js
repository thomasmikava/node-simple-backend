"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = __importDefault(require("../core/models/typegoose/city"));
const types_1 = __importDefault(require("./types"));
const inversify_1 = require("inversify");
const ModelsModules = new inversify_1.ContainerModule((bind) => {
    bind(types_1.default.MODELS.Subjects).toConstructor(city_1.default);
});
exports.default = ModelsModules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLW1vZHVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21vZGVscy1tb2R1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUVBQXlEO0FBQ3pELG9EQUE0QjtBQUM1Qix5Q0FBd0Q7QUFFeEQsTUFBTSxhQUFhLEdBQUcsSUFBSSwyQkFBZSxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ25FLElBQUksQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFZLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUNILGtCQUFlLGFBQWEsQ0FBQyJ9